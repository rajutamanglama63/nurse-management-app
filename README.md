# nurse-management-app

API documentation

USER:
POST user sign up - /api/user/signup --this api is used for creating new user
POST user sign in - /api/user/signin --this api will log in user if he/she exist else they will prompt a message
POST refresh token - /api/user/refresh_token --this api will generate refresh token

NURSE:
POST register new nurse - /api/nurse/ --this api will create or register new nurse 
GET nurse list - /api/nurse --this api will fetch all the existing nurses
GET single nurse - /api/nurse/:nurse_id --this api will get/fetch the only nurse whose id is specified in params
POST update nurse data - /api/nurse/:nurse_id --this api will update the data of nurse in particular
POST delete nurse - /api/nurse/:nurse_id --this api will delete the nurse by finding the one with id specified in params


Postman collection link
https://www.getpostman.com/collections/516f64fd76f9be8d73eb
