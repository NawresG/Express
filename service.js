const express = require('express')
const app = express()
const port = 5000
const fs = require('fs')
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const getDate = (req, res, next) => {
    console.log("Time:", new Date())
    if ((new Date().getDay() > 0 && new Date().getDay() < 6) && (new Date().getHours() >= 9 && (new Date().getHours() + 1) <= 17)) {
        console.log("app is open 🕖")
        next()
    } else {
        console.log("app error ⛔")
    }
}
// application level middleware
app.use(getDate);

app.get('/home', (req, res) => {
    fs.readFile('./public/Home/Home.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

app.get('/service', (req, res) => {
    fs.readFile('./public/Services/Services.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

app.get('/contact', (req, res) => {
    fs.readFile('./public/Contact/Contact.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

app.listen(5000, () => console.log(`Server is listening on port ${port}`))