const express = require('express')
require('dotenv').config()
const app = express() //now app is the very powerful variable

const datagithub = {
  "login": "prashant273000",
  "id": 83294769,
  "node_id": "MDQ6VXNlcjgzMjk0NzY5",
  "avatar_url": "https://avatars.githubusercontent.com/u/83294769?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/prashant273000",
  "html_url": "https://github.com/prashant273000",
  "followers_url": "https://api.github.com/users/prashant273000/followers",
  "following_url": "https://api.github.com/users/prashant273000/following{/other_user}",
  "gists_url": "https://api.github.com/users/prashant273000/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/prashant273000/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/prashant273000/subscriptions",
  "organizations_url": "https://api.github.com/users/prashant273000/orgs",
  "repos_url": "https://api.github.com/users/prashant273000/repos",
  "events_url": "https://api.github.com/users/prashant273000/events{/privacy}",
  "received_events_url": "https://api.github.com/users/prashant273000/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Prashant Prabhakar",
  "company": null,
  "blog": "",
  "location": "IIIT Jabalpur, Madhya Pradesh, India.",
  "email": null,
  "hireable": null,
  "bio": "Hello peoples👋,\r\nMy name is Prashant. I  am student of IIIT J CSE branch. I got interested into computers and tech from class 7th. \r\nThanks.",
  "twitter_username": null,
  "public_repos": 17,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2021-04-27T14:48:33Z",
  "updated_at": "2026-04-03T20:09:43Z"
};
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send("hashimojitotetratsu")
})
app.get('/github',(req,res)=>{
    res.json(datagithub)
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at the chai and code dot com </h1>')
})
app.get('/twitter1',(req,res)=>{
    res.send('<h2>You can view the twitter at the twitter.com</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

//both capital and small 