import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

//Connect To MySQL DB
let connection = mysql.createConnection({
    host: 'final481.c9debhe4folh.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Evett123',
    database: 'shopping_cart'
});

connection.connect((err) => {
    if(err) {
        console.log(err);
    }


    console.log("connected to mysql");
})


const app = express();
app.use(cors());
app.use(express.json());

//Tests API Endpoints
app.get('/', (req, res) => {
    res.statusCode = 200;
    return res.json({status: "success"});
})

//Gets a list of all items the store is selling
app.get('/getItems', (req, res) => {
    connection.query("SELECT * FROM shopping_cart.productTable;", (err, results, fields) => {
        if(err) {
            return console.log(err);
        }

        return res.json(results);
    })
});

//Get a list of all users
app.get('/users', (req, res) => {
    res.statusCode = 200;
    connection.query("SELECT * FROM shopping_cart.userPass;", (err, results, fields) => {
        if(err) {
            return console.log(err);
        }

        return res.json(results);
    })
});

//Adds a user to the database taking a username and password
app.get('/users/add/:username/:password', (req, res) => {
    connection.query("INSERT INTO userPass(userName, passWord) VALUES(\"" + req.params.username.toString() + "\",\"" + req.params.password.toString() + "\");", (err, results, fields) => {
        if(err) {
            res.statusCode = 500;
            return res.json(err)
        }
        let response = {response: "success"}
        res.statusCode = 200;
        return res.json(response);
    })
});

//Checks that the list of users contains the user trying to login
app.get('/users/login/:username/:password', (req, res) => {
    res.statusCode = 200;
    connection.query("SELECT userName, passWord FROM shopping_cart.userPass WHERE userName = \"" 
        + req.params.username + "\" AND passWord = \"" + req.params.password + "\";", 
        (err, results, fields) => {
            let status = "";
            if(err) {
                return res.json(err);
            }

            status = results.length < 1 ? "Failure" : "Success";

            let response = {
                status: status,
                users: results
            }

            return res.json(response);
        }
    )
});

app.get('/users/exists/:username', (req, res) => {
    console.log(req.params.username)
    connection.query("SELECT userName FROM shopping_cart.userPass WHERE userName = \"" + req.params.username + "\";", 
    (err, results, fields) => {
        console.log(results);
        if(err) {
            return res.json(err);
        }
        if(results.length > 0) {
            return res.json({exists: "true"});
        }
        return res.json({exists: "false"});
    })
})

app.get('cart/add/:username/:itemName/:price/:brand', (req, res) => {
    connection.query(`INSERT INTO cart(userName,itemName,price,brand)` + 
        `VALUES(${req.params.username.toString()},${req.params.itemName.toString()},${req.params.price},${req.params.username.brand.toString()})`,
        (err, results, fields) => {
            
        }
    )
})

app.listen(8080, () => console.log("http://localhost:8080"));
