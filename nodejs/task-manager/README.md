# Task Manager Node App

* [Initial setup](#initial-setup)
* [Express Server](#express-server)
* [Routes](#routes)
* [Controllers](#controllers)
* [More Controllers & routes](#more-controllers-and-routes)
* [Setup urls in postman](#setup-urls-in-postman)
* [Mongodb](#mongodb)

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

# more controllers and routes

controllers/tasks.js

```js
const getAllTasks = (req, res) => {
    res.send('all tasks');
};

const createTask = (req, res) => {
    res.send('create task');
};

const getTask = (req, res) => {
    res.send('get one task');
};

const updateTask = (req, res) => {
    res.send('update task');
};

const deleteTask = (req, res) => {
    res.send('delete task');
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};
```

routes/tasks.js

```js
const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
```

# setup urls in postman

# mongodb

db/connect.js

```js
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://sandip:mayain18@nodeexpressprojects.zd2hdti.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('connected to db'))
    .catch((err) => console.log('error connecting to db: ', err));
```

app.js

```diff
+ require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// middlewares
app.use(express.json());

const port = 3005;

// routes
app.get('/', (req, res) => {
    res.send('task manager');
});

app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
    console.log(`server started at port ${port}`);
});
```
