# cmpe280-project

How to run locally:

Mongdodb:  
In /backendmovietracker/app/routes.js line 7, change  
"mongodb://cmpe280-project:group7project@ds143151.mlab.com:43151/movietracker"  
to  
"localhost:27017/movietracker"  

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
