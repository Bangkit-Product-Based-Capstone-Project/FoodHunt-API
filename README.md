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
Running the `server` with command:
```sh
npm run start
```
This frontend is intended for CRUD in managing articles in the FoodHunt application.
<img width="946" alt="image" src="https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/87255617/c8324cf3-b037-489c-bed1-2ef6bb3e3456">

---
**For FastAPI-App Folder**

Move to directory `FastAPI-App` with command:
```sh
cd ..
cd FastAPI-App
```
* Install `libraries` with command: 
```sh
pip install -r requirements.txt
```

* Prepare the machine learning model, this related with `FoodHuntModel` repository. But, you can use your own model. If the model in `.h5` format, place it in the same folder with `app.py` file.

* Running the `server` with command:
```sh
KEY_ACCESS_TOKEN=<YOUR KEY ACCESS TOKEN> uvicorn app:app
```
---
## API

#### API for Authentication User

##### - Use JWT (JSON Web Token) -

 *1. Register*

  * method: `POST`
  * endpoint: `/users`
  * body request:
    | Parameter | Type     |
    | :-------- | :------- |
    | `name` | `string` |
    | `email` | `string` `email` `unique` |
    | `password` | `string` |
    | `confirmation password` | `string` |

    Example: 
    ```json
    "name": "Rinday",
    "email": "rinday@gmail.com",
    "Password": "rinday123",
    "confPassword" : "rinday123"
    ```


* body response:
    ```json
    {
      "message": "Successfully created"
    }
    ```
    <img width="646" alt="image" src="https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/87255617/3b024be8-4782-498c-9636-5b21ec8d6ab3">


 *2. Log In*

  * method: `POST`
  * endpoint: `/login`
  * body request:
    | Parameter | Type     |
    | :-------- | :------- |
    | `email` | `string` `email` `unique` |
    | `password` | `string` |

    Example: 
    ```json
    "email": "rinday@gmail.com",
    "password": "rinday123"
    ```

  * body response:
    ```json
    {
        "accessToken": "eyJhbGci..."
    }
    ```
    <img width="645" alt="image" src="https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/87255617/a86789b0-98a2-438d-9e0f-f67c66a8a336">


 *3. Refresh Token*
  * method: `GET`
  * endpoint: `/token`

    Example: 

    * body response:
    ```json
    {
      "refreshToken": "eyJhbGciOiJIUzI1NiIsIn....."
    }
    ```
    <img width="677" alt="image" src="https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/87255617/204a0d6c-896c-4be1-9ada-920a65ec10c3">


 *4. Log Out*
  * method: `DELETE`
  * endpoint: `/logout`

    Example: 
    * body response:
    ```json
    OK
    ```
    <img width="677" alt="image" src="https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/87255617/2497714a-2eec-4f3e-a3b3-bd5f53167100">

---
#### API for Article

*Get Article*

  * method: `GET`
  * endpoint: `/artikel`
  * body response (example):
    ```json
    {
        "id": 37,
        "Judul": "SATE",
        "image": "ce1c6032424ded9ffbb29bcac8fb0e92.jpg",
        "Body": "Sate (Jawa: ꦱꦠꦺ, translit. sate) adalah makanan yang terbuat dari daging yang dipotong kecil-kecil dan ditusuk sedemikian rupa dengan tusukan  lidi tulang daun kelapa atau bambu, kemudian dipanggang menggunakan bara arang kayu. Sate disajikan dengan berbagai macam bumbu yang bergantung pada variasi resep sate.[9] Daging yang dijadikan sate antara lain daging ayam, kambing, domba
    }
    ```
    <img width="633" alt="image" src="https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/87255617/b131c1b1-7bbd-497c-bcc6-ab4e9a747488">

---
#### API for Scan Feature
  * method: `POST`
  * endpoint: `/api/predict`
  * body request: `form-data`
    | Key | Value     |
    | :-------- | :------- |
    | `file` | `Select Files` |

Example:
 * At `authorization` tab, choose type `Bearer Token` and input the `Key Access Token`
   ![image](https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/99418260/27b8e17f-66e8-43f7-97c8-0173a8d09b01)

 * At, `body` tab, upload some image at the `Select Files`, example `bubur-manado.jpg` is uploaded

 * body response:
    ```json
    "bubur-manado"
    ```
  ![image](https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/99418260/0076ff88-e4e4-43e5-afff-5ac15505773e)

---
## Authors

- [@Rinday12](https://github.com/Rinday12)
- [@zirlyzkiyaa](https://github.com/zirlyzkiyaa)
