let express = require('express');
const { request } = require('http');
let path = require('path')
const app = express();

app.get('/', (request , response) => {
    response.sendFile(path.join(__dirname, "../mercadoliebre/views/home.html"));
});
app.use(express.static(path.join(__dirname,"../mercadoliebre/public/styles.css")));

app.listen(2020, () => {
    console.log("[servidor]:servidor corriendo en el puerto 2020") 
    });