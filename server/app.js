let express = require('express');
let app = express();
let server = require('http').Server(app);
let path = require('path');
let PORT = process.env.PORT || 3000;
       server.listen(PORT, function () {
        console.log('Connect success and listenning on port: ' + PORT);
    });
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../', 'index.html'));
    });

/* ------------------------------------------------ */
app.use(express.static(path.join(__dirname, '../')));
