from PIL import Image
from io import BytesIO
import numpy as np
import tensorflow as tf
import json
from tensorflow.keras.applications import imagenet_utils
from tensorflow.keras.models import load_model as keras_load_model

input_shape = (224, 224, 3)

def load_model():
    model = tf.keras.models.load_model('ModelCapstone.h5')
    return model

model = load_model()

async def read_image(image_encoded):
    image_data = await image_encoded.read()
    pil_image = Image.open(BytesIO(image_data))
    return pil_image


def preprocess(image_data):
    resized_image = image_data.resize(input_shape[:2])
    resized_image = np.asfarray(resized_image)
    preprocessed_image = resized_image / 127.5 - 1.0
    preprocessed_image = np.expand_dims(preprocessed_image, 0)
    return preprocessed_image

def predict(image: np.ndarray):
    # Load class mapping from JSON file
    with open('class_mapping.json') as f:
        class_mapping = json.load(f)

    predictions = model.predict(image)
    print(predictions.shape)
    predicted_class_index = np.argmax(predictions, axis=1)[0]
    predicted_food = class_mapping[str(predicted_class_index)]

    print(predicted_food)
    return predicted_food
