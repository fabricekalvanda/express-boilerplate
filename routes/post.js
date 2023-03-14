var express = require('express');
var router = express.Router();


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


router.get('/feed', (req, resp, next) => { //getting friends posts
  let jsonResp = [];
  if (!req.body || !req.body.id)
  {
      resp.send(401, 'Bad request');
  }
  posts.forEach(post => {
    friends.forEach(friend => {
      if((req.body.id === friend.userid && post.userid === friend.friendid) || req.body.id === post.userid){
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
router.get('/', (req, resp, next) => { //getting my posts
  let jsonResp = [];
  if (!req.body || !req.body.id)
  {
      resp.send(401, 'Bad request');
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

router.post('/', (req, resp, next) => { //make a post
  if (!req.body || !req.body.id || !req.body.title || !req.body.image || !req.body.desc)
  {
      resp.send(401, 'Bad request');
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

router.delete('/', (req, resp, next) => { //delete a post
  if (!req.body || !req.body.id || !req.body.date)
  {
      resp.send(401, 'Bad request');
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
  
//DONE: make post
//DONE: view friends posts
//DONE: view my posts
//DONE: Delete post
//TODO: Add friends
//TODO: remove friends
//TODO: view only one friends posts
//TODO: etc...

/*
router.get('/', (req, resp, next) => {
  if (!req.body || !req.body.id)
  {
      resp.send(401, 'Bad request');
  }

});
*/

module.exports = router;
