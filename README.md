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
