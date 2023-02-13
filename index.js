const express=require('express');
const app=express();
const path=require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const CSVToJSON = require('csvtojson');
const CreateDB = require('./db/createDB');
const connection = require('./db/db');
const CRUD = require ('./db/CRUD');
const port=3000;

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=> {
    res.redirect('/homePage')
});

//homepage routing
app.get('/homePage',(req,res)=> {
    // res.send('connceted to express')
    res.sendFile(path.join(__dirname,"views/homePage.html"))
});

//homepage2 routing
app.get('/homePage2',(req,res)=> {
    // res.send('connceted to express')
    res.sendFile(path.join(__dirname,"views/homePage2.html"))
});

//moviepage routing
app.get('/moviePage',(req,res)=> {
    res.sendFile(path.join(__dirname,"views/moviePage.html"))
});

//profile routing
app.get('/profile',(req,res)=> {
    res.sendFile(path.join(__dirname,"views/profile.html"))
});

//register routing
app.get('/register',(req,res)=> {
    res.sendFile(path.join(__dirname,"views/register.html"))
});

//reviewpage routing
app.get('/reviewPage',(req,res)=> {
    res.sendFile(path.join(__dirname,"views/reviewPage.html"))
});

//signIn routing
app.get('/signin',(req,res)=> {
    res.sendFile(path.join(__dirname,"views/signIn.html"))
});
//delete account
app.get('/deleteuser',(req,res)=> {
    res.sendFile(path.join(__dirname,"views/deleteUser.html"))
});


// db -- users table
app.get('/CreateUsersTable',CreateDB.CreateUsersTable);

app.get("/InsertUsersData", CreateDB.InsertUsersData);

app.get('/ShowUsersTable', CreateDB.ShowUsersTable);

app.get('/DropUsersTable', CreateDB.DropUsersTable);

// db -- movies table
app.get('/CreateMoviesTable',CreateDB.CreateMoviesTable);

app.get("/InsertMoviesData", CreateDB.InsertMoviesData);

app.get('/ShowMoviesTable', CreateDB.ShowMoviesTable);

app.get('/DropMoviesTable', CreateDB.DropMoviesTable);

// db -- reviews reviews

app.get('/CreateReviewsTable',CreateDB.CreateReviewsTable);

app.get("/InsertReviewsData", CreateDB.InsertReviewsData);

app.get('/ShowReviewsTable', CreateDB.ShowReviewsTable);

app.get('/DropReviewsTable', CreateDB.DropReviewsTable);

//drop all tables

app.get('/DropAllTables', CreateDB.DropAllTables);



//insertuserintoDB route
app.post('/insertuserintoDB', CRUD.insertNewRegistertoDB);

//insertreviewintoDB route
app.post('/insertreviewintoDB', CRUD.insertNewReviewtoDB);

//deleteuserfromDB route
app.post('/deleteuserfromDB', CRUD.deleteUserfromDB);

//updatemoviestatusinDB route
app.get('/updatemoviestatusinDB', CRUD.updateQuery);


// //show all users
// app.get('/showUsers', CRUD.showAll);

// find movie by category form
// app.get('/searchBycategoryForm', (req,res)=>{
//     res.sendFile(path.join(__dirname, "views/profile.html"));
// });

// find movie by rate
app.get('/findMovie', CRUD.findMovie);


app.listen(port, ()=>{
    console.log('server is running on port' + port)
})





// // search user by name form
// app.get('/searchByNameForm', (req,res)=>{
//     res.sendFile(path.join(__dirname, "views/findUser.html"));
// });

// // find users by name
// app.get('/findCustomer', CRUD.findUser);