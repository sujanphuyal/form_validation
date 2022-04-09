const express = require('express')
const app = express()

const cors = require('cors')
const mysql = require('mysql')

app.use(cors())
app.use(express())
app.use(express.json());

app.listen(5000, () => {
    console.log("Server is running in port 5000");
})
const db = mysql.createConnection({ user: 'root', host: 'localhost', password: '', database: 'formdb' , port:3306 });

db.connect(err => {
    if (err) { console.log(err, 'dberr'); }
    console.log('database connected....')
})

app.post('/user', (req, res) => {
    let name=req.body.name; 
    let email=req.body.email; 
    let phone=req.body.phone;
    let gender=req.body.gender;
    let hobby=req.body.hobby;

    // console.log('Hello')

let qr = 'insert into user(name,email,phone,gender,hobby) values(?,?,?,?,?)';

db.query(qr, [name, email, phone, gender, hobby], (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
            console.log(result, 'result');
                res.send({
                    message: 'data inserted'
        });
    });

});