let express = require('express');
const { request } = require('http');
let path = require('path')
const app = express();

app.use(express.static("public"))
app.get('/', (request , response) => {
    response.sendFile(path.join(__dirname, "../mercadoliebre/views/home.html"));
});

app.listen(2020, () => {
    console.log("[servidor]:servidor corriendo en el puerto 2020") 
    });
