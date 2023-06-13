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
---
## API

#### API for Authentication User

##### - Use JWT (JSON Web Token) -

 *1. Register*

  * method: `POST`
  * endpoint: `/users`
  * body request:
    | Parameter | Type     | Description                |
    | :-------- | :------- | :------------------------- |
    | `name` | `string` | **Required** |
    | `email` | `string` `email` `unique` | **Required** |
    | `password` | `string` | **Required**|
    | `confirmation password` | `string` | **Required**|

    Example: 
    ```json
    "name": Rinday
    "email": rinday@gmail.com
    "Password": rinday123
    "confPassword" : rinday123
    ```

* body response:
    ```json
    {
      "message": "Successfully created"
    }
    ```

 *2. Log In*

  * method: `POST`
  * endpoint: `/login`
  * body request:
    | Parameter | Type     | Description                |
    | :-------- | :------- | :------------------------- |
    | `email` | `string` `email` `unique` | **Required** |
    | `password` | `string` | **Required**|

    Example: 
    ```json
    "email": rinday@gmail.com
    "password": rinday123
    ```

  * body response:
    ```json
    {
        "accessToken": "eyJhbGci..."
    }
    ```

 *3. Update Access Token*
  * method: `PUT`
  * endpoint: `/authentications`
  * body request:
    | Parameter | Type     | Description                |
    | :-------- | :------- | :------------------------- |
    | `refreshToken` | `token` | **Required** |

    Example: 
    ```json
    "refreshToken": "eyJhbGciOiJIUzI1NiIsIn....."
    ```

    * body response:
    ```json
    "status": "success",
    "message": "Access Token berhasil diperbarui",
    "data": {
      "accessToken": "eyJhbGciOiJIUzI1NiI..."
    }
    ```

 *4. Log Out*
  * method: `DELETE`
  * endpoint: `/logout`
  * body request:
    | Parameter | Type     | Description                |
    | :-------- | :------- | :------------------------- |
    | `refreshToken` | `token` | **Required** |

    Example: 
    ```json
    "refreshToken": "eyJhbGciOiJIUzI1NiIsIn....."
    ```

    * body response:
    ```json
    "status": "success",
    "message": "Authentications has been removed"
    ```
---
#### API for Article
---
#### API for Scan Feature
  * method: `POST`
  * endpoint: `/api/predict`
  * body request:
    | Key | Value     | Description                |
    | :-------- | :------- | :------------------------- |
    | `file` | `Select Files` | **Required** |

Example:

* Upload some image at the `Select files`, example `bubur-manado.jpg` uploaded

 * body response:
    ```json
    "bubur-manado"
    ```
