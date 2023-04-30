const bodyParser = require('body-parser');
const express = require('express');

const{ PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service');

const setUpAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, () => {
       console.log(`server started at port ${PORT}`);

       sendBasicEmail(
        'airlinebookingsystem999@gmail.com',
        'ashlabbarman@gmail.com',
        'this is a funcking testing email',
        'hello ji kaise ho saare this is love babbar'
       );
    });
}

setUpAndStartServer();