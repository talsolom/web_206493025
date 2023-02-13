const connection = require('./db');

const insertNewRegistertoDB = (req,res)=>{
    //validate body exsists
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    };
    //pull data from body into jason
    const newUser = {
        "name": req.body.registerName,
        "familyname": req.body.registerFname,
        "username": req.body.registerUname,
        "email": req.body.registerEmail,
        "password": req.body.registerpsw,
        "birthday": req.body.registerBD,
    };
    //run query
    const Q1 = "INSERT INTO users SET ?";
    connection.query(Q1, newUser, (err, mysqlres)=>{
        if (err) {
            console.log("error:", err);
            res.status(400).send({message: "error in Register: "+ err});
            return;
        }
        console.log("new user created!");
        res.send("new user created!")
        return;
    });
};

const insertNewReviewtoDB = (req,res)=>{
    //validate body exsists
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    };
    //pull data from body into jason
    const newReview = {
        "moviename": req.body.movie,
        "review": req.body.review,
        "rating": req.body.rating,
    };
    //run query
    const Q2 = "INSERT INTO reviews SET ?";
    connection.query(Q2, newReview, (err, mysqlres)=>{
        if (err) {
            console.log("error:", err);
            res.status(400).send({message: "error in Review: "+ err});
            return;
        }
        console.log("new review created!");
        res.send("new review created!")
        return;
    });
};

const findMovie = (req,res)=>{
    // validate body exists
    if (!req.body) {
        res.status(400).send({message: "please fill rate to search"});
        return;    
    }
    //if body not empty-pull data from body
    const SearchRate = req.body.SearchRate;
    console.log(SearchRate);
    // run query
    const Q3 = "SELECT moviename FROM reviews GROUP BY moviename HAVING AVG(rating) > ?";
    connection.query(Q3, SearchRate + "%" , (err, mysqlres)=>{
        if (err) {
            console.log("error is: ", err);
            res.status(400).send({message:"could not search movies"});
            return;
        }
        console.log("found movie: ", mysqlres);
        res.send(mysqlres);
        return;
    })
}


const deleteUserfromDB = (req,res) => {
    // Validate the request body
    if (!req.body) {
      res.status(400).send({ message: "Please provide the user's email to remove" });
      return;
    }
    // Get the customer's email from the request body
    const email = req.body.email;
  
    // Run the DELETE query to remove the customer
    const Q4 = "DELETE FROM users WHERE email = ?";
    connection.query(Q4, email, (err, result) => {
      if (err) {
        res.status(400).send({ message: "Failed to remove the user" });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(400).send({ message: "The user with the provided email was not found" });
        return;
      }
      res.send({ message: "The user was removed successfully" });
      return;
    });
  };

  const updateQuery = (req,res)=>{
    const Q5 = `UPDATE movies
                          SET status = 
                          CASE 
                          WHEN year = 2023 THEN 'new'
                          ELSE 'regular'
                          END;`;
  
    connection.query(Q5, (error, result) => {
      if (error) throw error;
      console.log(`${result.affectedRows} row(s) updated`);
          res.send("updated")
    });
  };
  module.exports = {insertNewRegistertoDB, insertNewReviewtoDB, findMovie, deleteUserfromDB, updateQuery};
