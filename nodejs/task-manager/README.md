# Task Manager Node App

* [Initial setup][initial-setup]
* [Express Server][expres-server]

## initial setup

app.js

```js
console.log('task manager');
```

package.json

```json
{
  "name": "task-manager",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mongoose": "^5.11.10"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
```

## express server

app.js

```js
const express = require('express');
const app = express();

const port = 3005;

// routes
app.get('/', (req, res) => {
    res.send('task manager');
});

app.listen(port, () => {
    console.log(`server started at port ${port}`);
});
```
