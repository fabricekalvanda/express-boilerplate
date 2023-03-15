# Social Media API

## Authentication:
**Authentication type:**
```
Bearer token: ab4s5sy63c
```
**Getting a token:**
1. You can sign up using the endpoint /API/signup and include your username and password in the body.
2. You can login using /API/login and include your username and password in the body
3. You can use the endpoint /API/login as described in option 2 along with your current auth token.

## Endpoints:
### Create account:
POST /API/signup\
**Body:**
```
    {
        "username": String
        "password": String
    }
```
**Response:**
```
    401 Bad request
    OR
    401 username is already taken
    OR
    {
        "token": <token>,
        "UID": <UserID>,
    }
```
### Login:
POST /API/login\
**Body:**
```
    {
        "username": String
        "password": String
    }
```
**Response:**
```
    401 Bad request
    OR
    login failed. Please sign up.
    OR
    {
        "token": <token>,
        "UID": <UserID>,
    }
```
### Get Feed:
GET /API/feed\
**Head:**
```
    Bearer token: ab4s5sy63c
```
**Body:**
```
    {
        "id": "4"
    }
```
**Response:**
```
    401 Bad request
    OR
    401 not authenticated
    OR
    {
        "userid": String,
        "title": String,
        "image": String,
        "desc": String,
        "date": String,
    }
```
### Get Posts:
PUT /API/posts\
**Head:**
```
    Bearer token: ab4s5sy63c
```
**Body:**
```
    {
        "id": String,
        "username": String,
        "password": String
    }
```
**Response:**
```
    401 Bad request
    OR
    401 not authenticated
    OR
    {
        "userid": String,
        "title": String,
        "image": String,
        "desc": String,
        "date": String,
    }
```
### Make Post:
POST /API/posts\
**Head:**
```
    Bearer token: ab4s5sy63c
```
**Body:**
```
    {
        "id": String,
        "title": String,
        "image": String,
        "desc": String
    }
```
**Response:**
```
    401 Bad request
    OR
    401 not authenticated
    OR
    you made a post at <CurTime> titled  <title>
```
### Remove Post:
DELETE /API/posts/\
**Head:**
```
    Bearer token: ab4s5sy63c
```
**Body:**
```
    "date": String
```
**Response:**
```
    401 Bad request
    OR
    401 not authenticated
    OR
    post deleted
```
### Get friends:
GET /API/friends\
**Head:**
```
    Bearer token: ab4s5sy63c
```
**Body:**
```
    {
        "id": String
    }
```
**Response:**
```
    401 Bad request
    OR
    401 not authenticated
    OR
    {
        "username": user.username,
    }
```
### Add friends:
POST /API/friends\
**Head:**
```
    Bearer token: ab4s5sy63c
```
**Body:**
```
    {
        "id": String,
        "friendid": String
    }
```
**Response:**
```
    401 Bad request
    OR
    401 not authenticated
    OR
    Added friend with ID: <friendid>
```
