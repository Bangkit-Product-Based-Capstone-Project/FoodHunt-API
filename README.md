# FoodHunt API

## Get Started
Clone `repository` with command: 
```bash
https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API.git
```
---
**For Backend Folder**

Move to directory `Backend` with command:
```sh
cd Backend
```

Install `dependencies` with command:
```sh
npm install
```

Make sure that `.env` file have content like this:
```sh
# for jwt token

KEY_ACCESS_TOKEN = 
KEY_REFRESH_TOKEN =
```

Running the `server` with command:
```sh
npm run start
```
Generate JWT

* Token Access & Refresh Token
  
  In terminal/cmd type `node` then enter.
  
  Type this code to generate token: 
  ```sh
  require('crypto').randomBytes(64).toString('hex')
  ```
  Copy the output and paste to the `.env-> ACCESS_TOkEN`

  Repeat the sintax above to generate the second token, copy 
  output and paste to `.env-> REFRESH_TOKEN`
---
**For Frontend Folder**

Move to directory `Frontend` with command:
```sh
cd ..
cd Frontend
```
---
**For FastAPI-App Folder**

Move to directory `FastAPI-App` with command:
```sh
cd ..
cd FastAPI
```
* Install `libraries` with command: 
```sh
pip install -r requirements.txt
```

* Prepare the machine learning model, this related with `FoodHuntModel` repository. But, you can use your own model. If the model in `.h5` format, place it in the same folder with `app.py` file.

* Running the `server` with command:
```sh
uvicorn app:app
```
