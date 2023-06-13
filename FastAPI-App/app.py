from fastapi import FastAPI, File, UploadFile, Header
import uvicorn
from prediction import read_image, preprocess, predict
from typing import Annotated
import jwt
import os

app = FastAPI()
jwt_secret = os.environ['KEY_ACCESS_TOKEN']

@app.get('/index')
def hello_world(name: str):
    return f"Hello {name}!"

@app.post('/api/predict')
async def predict_image(authorization: Annotated[str | None, Header()] = None, file: UploadFile = File(...)):
    
    print(authorization)

    if(authorization is None):
        return 'Tidak ada JWT!'

    split_authorization = authorization.split(' ')
    if len(split_authorization) != 2:
        return 'Tidak ada JWT juga!'
    
    JWT = split_authorization[1]
    print(JWT)

    jwt.decode(JWT, jwt_secret, algorithms=["HS256"])

    # Read the file uploaded by the user
    image = await read_image(file)

    # After doing processing
    image = preprocess(image)

    # Make Prediction
    predictions = predict(image)
    print(predictions)
    return predictions


if __name__ == "__main__":
    uvicorn.run(app, port=8080, host='0.0.0.0')
