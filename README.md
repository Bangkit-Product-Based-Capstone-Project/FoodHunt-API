# FoodHunt API

## User Story and Cloud Architecture
* FoodHunt User Story
![Foodhunt Architecture-Page-3 drawio](https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/99418260/2b0d8ee5-604b-4f47-b1e9-947ac6fbbeac)

* FoodHunt Cloud Architecture
![Foodhunt Architecture-Page-4 drawio (1)](https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/99418260/0d477049-f4ad-4ef6-8871-35848d1bc846)

---
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

* Access Token & Refresh Token
  
  In terminal/cmd type `node` then enter.
  
  Type this code to generate token: 
  ```sh
  require('crypto').randomBytes(64).toString('hex')
  ```
  Copy the output and paste to the `.env-> ACCESS_TOkEN`

  Repeat the syntax above to generate the second token, copy 
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
    | `confPassword` | `string` |

    Example:
    ```json
    {
      "name": "Rinday",
      "email": "rinday@gmail.com",
      "password": "rinday123",
      "confPassword" : "rinday123"
    }
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
    {
      "email": "rinday@gmail.com",
      "password": "rinday123"
    }
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
      "accessToken": "eyJhbGciOiJIUzI1NiIsIn....."
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
    [
        {
            "id": 37,
            "Judul": "SATE",
            "image": "ce1c6032424ded9ffbb29bcac8fb0e92.jpg",
            "Body": "Sate (Jawa: ꦱꦠꦺ, translit. sate) adalah makanan yang terbuat dari daging yang dipotong kecil-kecil dan ditusuk sedemikian rupa dengan tusukan lidi tulang daun kelapa atau bambu, kemudian dipanggang menggunakan bara arang kayu. Sate disajikan dengan berbagai macam bumbu yang bergantung pada variasi resep sate.[9] Daging yang dijadikan sate antara lain daging ayam, kambing, domba, sapi, babi, kelinci, kuda, dan lain-lain.\r\n\r\nSate diketahui berasal dari Jawa, Indonesia, dan dapat ditemukan di mana saja di Indonesia dan telah dianggap sebagai salah satu masakan nasional Indonesia.[10] Sate juga populer di negara-negara Asia Tenggara lainnya seperti Malaysia, Singapura, Filipina, dan Thailand. Sate juga populer di Belanda karena dipengaruhi masakan Indonesia yang dulu merupakan koloninya.\r\n\r\nSate adalah hidangan yang sangat populer di Indonesia, dengan berbagai suku bangsa dan tradisi seni memasak (lihat Masakan Indonesia) telah menghasilkan berbagai jenis sate. Di Indonesia, sate dapat diperoleh dari pedagang sate keliling, pedagang kaki lima di warung tepi jalan, hingga di restoran kelas atas, serta kerap disajikan dalam pesta formal dan non-formal. Resep dan cara pembuatan sate beraneka ragam bergantung variasi dan resep masing-masing di tiap daerah. Hampir segala jenis daging dapat dibuat sate. Sebagai negara asal mula sate, Indonesia memiliki variasi resep sate yang banyak.\r\n\r\nBiasanya sate diberi saus, bisa berupa bumbu kecap, bumbu kacang, atau yang lainnya, biasanya disertai acar dari irisan bawang merah, mentimun, dan cabai rawit. Sate dimakan dengan nasi hangat atau bisa juga disajikan dengan lontong atau kupat ataupun hanya sate saja.\r\n\r\nHidangan internasional yang mirip sate antara lain yakitori dari Jepang, shish kebab dari Turki, shashlik dari Kaukasia, chuanr dari Tiongkok, dan sosatie dari Afrika Selatan. Sate terdaftar sebagai peringkat ke-14 dalam World's 50 most delicious foods (50 Hidangan Paling Lezat di Dunia) melalui jajak pendapat pembaca yang digelar oleh CNN Go pada 2011.[11]\r\n\r\n",
            "url": "http://localhost:5000/images/ce1c6032424ded9ffbb29bcac8fb0e92.jpg",
            "createdAt": "2023-06-12T04:05:52.000Z",
            "updatedAt": "2023-06-12T04:05:52.000Z"
        },
        ...
      ]
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
   ![image](https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/99418260/d96c7879-f4e2-4567-85e5-6b2c80cb6ae3)

 * At `body` tab, upload some image at the `Select Files`, example `bubur-manado.jpg` is uploaded

 * body response:
    ```json
    "bubur-manado"
    ```
  ![image](https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/99418260/32265a89-d60e-4a2e-8de7-4a4312ce4aa2)

---
## 🔗 Links

We have deployed the API in our project using the Cloud Run service on the Google Cloud Platform. Here are three links to the results of the deployment:
* Backend URL: https://backend-l6hkbss2ja-et.a.run.app
* Frontend URL: https://frontend-l6hkbss2ja-et.a.run.app
* FastAPI-App URL: https://predict-image-l6hkbss2ja-et.a.run.app

---
## Cloud Services Used
* Database

![Google Cloud Storage](https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/99418260/f1c514de-9c6e-4504-b9ed-1a899b8f47b8)
![Cloud SQL](https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/99418260/5ceeba60-3aa7-42bc-8eda-10ed0c695eaf)

* Deployment

![Cloud Run - Small](https://github.com/Bangkit-Product-Based-Capstone-Project/FoodHunt-API/assets/99418260/4cfa36b3-d769-48fc-a3d7-e5f5a5fbfbb0)

---
## Authors

- [@Rinday12](https://github.com/Rinday12)
- [@zirlyzkiyaa](https://github.com/zirlyzkiyaa)
