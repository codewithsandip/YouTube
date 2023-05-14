# Task Manager Node App

* [Initial setup](#initial-setup)
* [Express Server](#express-server)
* [Routes](#routes)
* [Controllers](#controllers)

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

## routes

routes/tasks.js

```js
const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.send('all tasks');
});

module.exports = router;
```

app.js

```diff
const express = require('express');
const app = express();
+ const tasks = require('./routes/tasks');

// middlewares
+ app.use(express.json());

const port = 3005;

// routes
app.get('/', (req, res) => {
    res.send('task manager');
});

+ app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
    console.log(`server started at port ${port}`);
});
```

# controllers

controllers/tasks.js

```js
const getAllTasks = (req, res) => {
    res.send('all items');
};

module.exports = {
    getAllTasks
};
```

routes/tasks.js

```diff
const express = require('express');
const router = express.Router();
+ const { getAllTasks } = require('../controllers/tasks');

+ router.route('/').get(getAllTasks);

module.exports = router;
```
