var SQL = require('./db');
const path = require('path');
const csv=require('csvtojson');

//db-- users table
const CreateUsersTable = (req,res)=> {
    var Q1 = "CREATE TABLE IF NOT EXISTS users (name VARCHAR(255) NOT NULL, familyname VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, birthday VARCHAR(255) NOT NULL)";
    SQL.query(Q1,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating users table"});
            return;
        }
        console.log('created users table');
        res.send("users table created");
        return;
    })
}

const InsertUsersData = (req,res)=>{
    var Q2 = "INSERT INTO users SET ?";
    const csvFilePath= path.join(__dirname, "usersdata.csv");
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            console.log(jsonObj); // for learning perpose
            jsonObj.forEach(element => {
                var NewEntry = {
                    "name": element.name,
                    "familyname": element.familyname,
                    "username": element.username,
                    "email": element.email,
                    "password": element.password,
                    "birthday": element.birthday
                }
                SQL.query(Q2, NewEntry, (err,mysqlres)=>{
                    if (err) {
                        console.log("error in inserting data to users table", err);
                    }
                    console.log("created row sucssefuly ");
                });
            });
        });
    res.send("data inserted to users table");
};

const ShowUsersTable = (req,res)=>{
    var Q3 = "SELECT * FROM users";
    SQL.query(Q3, (err, mySQLres)=>{
        if (err) {
            console.log("error in showing users table ", err);
            res.send("error in showing users table ");
            return;
        }
        console.log("showing users table");
        res.send(mySQLres);
        return;
    })};

const DropUsersTable = (req, res)=>{
    var Q4 = "DROP TABLE users";
    SQL.query(Q4, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping users table ", err);
            res.status(400).send({message: "error in dropping users table" + err});
            return;
        }
        console.log("users table dropped");
        res.send("users table dropped");
        return;
    })
}

//db-- movies table
const CreateMoviesTable = (req,res)=> {
    var Q5 = "CREATE TABLE IF NOT EXISTS movies (name VARCHAR(255) NOT NULL, actors VARCHAR(255) NOT NULL, director VARCHAR(255) NOT NULL, length VARCHAR(255) NOT NULL, place VARCHAR(255) NOT NULL, year VARCHAR(4) NOT NULL, genres VARCHAR(255) NOT NULL, status VARCHAR(25) NOT NULL, images VARCHAR(255))";
    SQL.query(Q5,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating movies table"});
            return;
        }
        console.log('created movies table');
        res.send("movies table created");
        return;
    })
}

const InsertMoviesData = (req,res)=>{
    var Q6 = "INSERT INTO movies SET ?";
    const csvFilePath= path.join(__dirname, "moviesdata.csv");
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            console.log(jsonObj); // for learning perpose
            jsonObj.forEach(element => {
                var NewEntry = {
                    "name": element.name,
                    "actors": element.actors,
                    "director": element.director,
                    "length": element.length,
                    "place": element.place,
                    "year": element.year,
                    "genres": element.genres,
                    "status": element.status,
                    "images": element.images
                }
                SQL.query(Q6, NewEntry, (err,mysqlres)=>{
                    if (err) {
                        console.log("error in inserting data to movies table", err);
                    }
                    console.log("created row sucssefuly ");
                });
            });
        });
    res.send("data inserted to movies table");
};

const ShowMoviesTable = (req,res)=>{
    var Q7 = "SELECT * FROM movies";
    SQL.query(Q7, (err, mySQLres)=>{
        if (err) {
            console.log("error in showing movies table ", err);
            res.send("error in showing movies table ");
            return;
        }
        console.log("showing movies table");
        res.send(mySQLres);
        return;
    })};

const DropMoviesTable = (req, res)=>{
    var Q8 = "DROP TABLE movies";
    SQL.query(Q8, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping movies table ", err);
            res.status(400).send({message: "error in dropping movies table" + err});
            return;
        }
        console.log("movies table dropped");
        res.send("movies table dropped");
        return;
    })
}

//db-- reviews table
const CreateReviewsTable = (req,res)=> {
    var Q9 = "CREATE TABLE IF NOT EXISTS reviews (moviename VARCHAR(255) NOT NULL, review VARCHAR(500) NOT NULL, rating VARCHAR(1) NOT NULL)";
    SQL.query(Q9,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating reviews table"});
            return;
        }
        console.log('created reviews table');
        res.send("reviews table created");
        return;
    })

}

const InsertReviewsData = (req,res)=>{
    var Q10 = "INSERT INTO reviews SET ?";
    const csvFilePath= path.join(__dirname, "reviewsdata.csv");
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            console.log(jsonObj); // for learning perpose
            jsonObj.forEach(element => {
                var NewEntry = {
                    "moviename": element.moviename,
                    "review": element.review,
                    "rating": element.rating
                }
                SQL.query(Q10, NewEntry, (err,mysqlres)=>{
                    if (err) {
                        console.log("error in inserting data to reviews table", err);
                    }
                    console.log("created row sucssefuly ");
                });
            });
        });

    res.send("data inserted to reviews table");

};

const ShowReviewsTable = (req,res)=>{
    var Q11 = "SELECT * FROM reviews";
    SQL.query(Q11, (err, mySQLres)=>{
        if (err) {
            console.log("error in showing reviews table ", err);
            res.send("error in showing reviews table ");
            return;
        }
        console.log("showing reviews table");
        res.send(mySQLres);
        return;
    })};

const DropReviewsTable = (req, res)=>{
    var Q12 = "DROP TABLE reviews";
    SQL.query(Q12, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping reviews table ", err);
            res.status(400).send({message: "error in dropping reviews table" + err});
            return;
        }
        console.log("reviews table dropped");
        res.send("reviews table dropped");
        return;
    })
}

// drop all tables together
const DropAllTables = (req, res)=>{
    var Q4 = "DROP TABLE users, movies, reviews";
    SQL.query(Q4, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping all tables ", err);
            res.status(400).send({message: "error in dropping all tables" + err});
            return;
        }
        console.log("all tables dropped");
        res.send("all table dropped");
        return;
    })
}

module.exports = {CreateUsersTable, InsertUsersData, ShowUsersTable, DropUsersTable,
    CreateMoviesTable, InsertMoviesData, ShowMoviesTable, DropMoviesTable,
    CreateReviewsTable, InsertReviewsData, ShowReviewsTable, DropReviewsTable, DropAllTables};