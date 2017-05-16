# cmpe280-project

How to run locally:

Mongdodb:
In /backendmovietracker/app/routes.js line 7, change port 43151 to 27017

Start Mongodb
```bash
sudo mongod
```

Start the Mongo shell in a different terminal
```bash
mongo
```

In the mongo shell, use the database movie tracker
```bash
use movietracker
```

Servers:
cd into /backendmovietracker and /frontendmovietracker and enter the following commands

```bash
npm install
```

```bash
npm start
```
