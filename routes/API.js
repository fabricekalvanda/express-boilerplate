var express = require('express');
var router = express.Router();
/*
Postman /signup:
    Header:
        Auth: bearer token
    body:
        setting: raw -> json 
    
    {
        "username": "isaak",
        "password": "Wheeler"
    }
*/


let users = [
    {
        "id": "1",
        "username": "admin",
        "password": "admin",
    },
    {
        "id": "2",
        "username": "isaak",
        "password": "wheeler",
    },
    {
        "id": "3",
        "username": "jake",
        "password": "paul",
    }
];
let sessions = [
    {
        "sessionTime": "1678052012358",
        "Token": "abc123",
        "user": "admin",
        "uid": "1"
    }
];

let posts = [
    {
        "userid": "1",
        "title": "Test post 1",
        "image": "UID 1",
        "desc": "Test 1",
        "date": "1678052012358",
    },
    {
      "userid": "1",
      "title": "Test post 2",
      "image": "UID 1",
      "desc": "Test 2",
      "date": "1678052012358",
    },
    {
      "userid": "2",
      "title": "Test post 1",
      "image": "UID 2",
      "desc": "Test 1",
      "date": "1678052012358",
    },
    {
      "userid": "2",
      "title": "Test post 2",
      "image": "UID 2",
      "desc": "Test 2",
      "date": "1678052012358",
    },
    {
      "userid": "3",
      "title": "Test post 1",
      "image": "UID 3",
      "desc": "Test 1",
      "date": "1678052012358",
    },
    {
      "userid": "3",
      "title": "Test post 2",
      "image": "UID 3",
      "desc": "Test 2",
      "date": "1678052012359",
    }
  ];
  
  let friends = [
    {
        "userid": "1",
        "friendid": "2",
    },
    {
      "userid": "1",
      "friendid": "3",
    },
    {
      "userid": "2",
      "friendid": "1",
    },
    {
      "userid": "2",
      "friendid": "3",
    }
  ];


router.post('/signup', (req, resp, next) => {
    if (!req.body || !req.body.username || !req.body.password)
    {
        resp.send(401, 'Bad request');
    }
    
    const username = req.body.username;
    const password = req.body.password;
    let userId = 1;
    
    var mToken = Math.random().toString(36);
    mToken = mToken.substring(2);

    users.forEach(element => {
        if (userId <= parseInt(element.id))
        {
            userId = userId + 1;
        }
    });
    
    users.push({
        id: userId,
        username: username,
        password: password,
    });
    sessions.push({
        sessionTime: Date.now(),
        token: mToken,
        user: username,
        uid: userId,
    });

    console.log("Req Body: " + req.body);
    console.log("All Users: ");
    users.forEach(element => {
        console.log("Username: " + element.username + " Password: " + element.password + " ID: " + element.id);
    });
    
    resp.send({ token: mToken });
});


router.post('/login', (req, resp, next) => {
   
    if(!req.headers.authorization){
        if (!req.body || !req.body.username || !req.body.password)
        {
            resp.send(401, 'Bad request');
        }
        let userID = null;
        users.forEach(element => {
            if ((element.username === req.body.username) && (element.password === req.body.password)){
                userID = element.id;
            }
        });
        
        if (userID === null){
            resp.send("login failed. Please sign up.");
        }else{
            var mToken = Math.random().toString(36);
            mToken = mToken.substring(2);
            const username = req.body.username;
            const timestamp = Date.now();
           
        
            sessions.push({
                sessionTime: timestamp,
                token: mToken,
                user: username,
                uid: userID,
            });
            
            resp.send({ token: mToken });
        }

    } else {
        
        let GivenToken = req.headers.authorization.substring(7);
        sessions.forEach(element => {
            if (element.Token === GivenToken && req.body.username === element.user){
                resp.send("Active session: " + element.Token);
            }
        });
        resp.send("incorrect username or token.")
    }
});


router.get('/feed', (req, resp) => { //getting friends posts
    let jsonResp = [];
    
    if (!req.body || !req.body.id)
    {
        resp.send(401, 'Bad request');
    }

    let mToken = req.headers.authorization.substring(7);
    let passFail = 0;
    sessions.forEach(element => {
        if (element.Token === mToken){
            passFail = 1;
        }
    });
    if (!(passFail === 1)){
        resp.send(401, 'not authenticated');
    }

    posts.forEach(post => {
      friends.forEach(friend => {
        //if((req.body.id === friend.userid && post.userid === friend.friendid) || req.body.id === post.userid){
        if((req.body.id === friend.userid && post.userid === friend.friendid)){
          console.log("Post: " + post.title + " image: " + post.image);
          jsonResp.push(
            {
              "userid": post.userid,
              "title": post.title,
              "image": post.image,
              "desc": post.desc,
              "date": post.date,
            }
          );
        }
      });
    });
   resp.send(JSON.stringify(jsonResp));
  });

router.get('/posts', (req, resp, next) => { //getting my posts
    let jsonResp = [];
    if (!req.body || !req.body.id)
    {
        resp.send(401, 'Bad request');
    }

    let mToken = req.headers.authorization.substring(7);
    let passFail = 0;
    sessions.forEach(element => {
        if (element.Token === mToken){
            passFail = 1;
        }
    });
    if (!(passFail === 1)){
        resp.send(401, 'not authenticated');
    }

    posts.forEach(post => {
        if(req.body.id === post.userid){
          console.log("Post: " + post.title + " image: " + post.image);
          jsonResp.push(
            {
              "userid": post.userid,
              "title": post.title,
              "image": post.image,
              "desc": post.desc,
              "date": post.date,
            }
          );
        }
    });
   resp.send(JSON.stringify(jsonResp));
  });
  
  router.post('/posts', (req, resp, next) => { //make a post
    if (!req.body || !req.body.id || !req.body.title || !req.body.image || !req.body.desc)
    {
        resp.send(401, 'Bad request');
    }

    let mToken = req.headers.authorization.substring(7);
    let passFail = 0;
    sessions.forEach(element => {
        if (element.Token === mToken){
            passFail = 1;
        }
    });
    if (!(passFail === 1)){
        resp.send(401, 'not authenticated');
    }

    let date = Date.now();
    posts.push(
      {
        userid: toString(req.body.id),
        title: toString(req.body.title),
        image: toString(req.body.image),
        desc: toString(req.body.desc),
        date: toString(date),
      }
    );
    resp.send("you made a post at " + Date.now() + " titled " + req.body.title);
  });
  
router.delete('/posts', (req, resp, next) => { //delete a post
    if (!req.body || !req.body.id || !req.body.date)
    {
        resp.send(401, 'Bad request');
    }

    let mToken = req.headers.authorization.substring(7);
    let passFail = 0;
    sessions.forEach(element => {
        if (element.Token === mToken){
            passFail = 1;
        }
    });
    if (!(passFail === 1)){
        resp.send(401, 'not authenticated');
    }

    let index = 0
    posts.forEach(post => {
        if(req.body.date === post.date){
          posts[index] = {
            userid: toString("id"),
            title: toString("title"),
            image: toString("image"),
            desc: toString("desc"),
            date: toString("date"),
          };
          console.log(posts[index].userid);
            resp.send("post deleted" + index + posts.length);
        }
        index++;
    });
    resp.send("post not found");
  });

router.get('/friends', (req, resp, next) => { //delete a post
    let jsonResp = [];
    if (!req.body || !req.body.id)
    {
        resp.send(401, 'Bad request');
    }

    let mToken = req.headers.authorization.substring(7);
    let passFail = 0;
    sessions.forEach(element => {
        if (element.Token === mToken){
            passFail = 1;
        }
    });
    if (!(passFail === 1)){
        resp.send(401, 'not authenticated');
    }
    
    friends.forEach(friend => {
        if(req.body.id === friend.userid){
            users.forEach(user => {
                if(friend.friendid === user.id){
                    jsonResp.push(
                        {
                          "username": user.username,
                        });
                }
            });
        }
    });
    resp.send(JSON.stringify(jsonResp));
  });

module.exports = router;