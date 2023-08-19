# Angular forum server
    This project is related to the Angular Forum: https://github.com/DanielIliev/AngularForum

## Installation
    Clone the project in the directory of choice by running: git clone https://github.com/DanielIliev/AngularForum
    Run 'npm install' in the root directory and wait for the installation of the dependencies to finish
    Run 'npm start' for development or 'node index.js'.
    Server runs by default on port 3000 locally

## Functionalities
    Guest
        - Access to the available posts
        - Provide detailed information regarding a post
        - Register account
        - Login account
        - Provide JWT after successful completion of login or register

    User
        - Access to the available posts
        - Provide detailed information regarding a post
        Authorized with JWT
            - Create new posts
            - Edit posts owned by the user
            - Delete posts owned by the user
            - Comment on any post

## Tech stack
    Express JS
    Mongoose

## Helper libraries
    express-validators
    jsonwebtoken

## Third-party services used
    Render as the hosting solution for the back-end
    MongoDB Atlas as the database