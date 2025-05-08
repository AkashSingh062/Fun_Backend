require('dotenv').config()
const express = require('express');
const app = express();

const port = 3000;
const githubData = {
    "login": "AkashSingh062",
    "id": 178636199,
    "node_id": "U_kgDOCqXFpw",
    "avatar_url": "https://avatars.githubusercontent.com/u/178636199?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AkashSingh062",
    "html_url": "https://github.com/AkashSingh062",
    "followers_url": "https://api.github.com/users/AkashSingh062/followers",
    "following_url": "https://api.github.com/users/AkashSingh062/following{/other_user}",
    "gists_url": "https://api.github.com/users/AkashSingh062/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AkashSingh062/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AkashSingh062/subscriptions",
    "organizations_url": "https://api.github.com/users/AkashSingh062/orgs",
    "repos_url": "https://api.github.com/users/AkashSingh062/repos",
    "events_url": "https://api.github.com/users/AkashSingh062/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AkashSingh062/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Akash Singh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Student",
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2024-08-17T06:50:04Z",
    "updated_at": "2025-05-06T05:07:16Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!');
});
app.get('/youtube', (req, res) => {
    res.send('<h1>Hello Youtube!</h1>');
});
app.get('/github', (req, res) => {
    res.json(githubData);
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});