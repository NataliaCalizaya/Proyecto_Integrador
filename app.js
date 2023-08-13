const express = require ('express')
const app = express ()
const path = require('path');

app.use (express.static (path.join(__dirname, 'public')))

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'))
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'))
});

const port = process.env.PORT || 3080;
app.listen (port, ()=> console.log(`Servidor corriendo en el puerto ${port}`))

