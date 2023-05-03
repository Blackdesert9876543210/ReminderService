const bodyParser = require('body-parser');
const express = require('express');

const{ PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');
const TicketController = require('./controllers/ticket-controller');

const jobs = require('./utils/job');

const setUpAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
       console.log(`server started at port ${PORT}`);
       jobs();

    //    sendBasicEmail(
    //     'airlinebookingsystem999@gmail.com',
    //     'ashlabbarman@gmail.com',
    //     'this is a funcking testing email',
    //     'hello ji kaise ho saare this is love babbar'
    //    );
    });
}

setUpAndStartServer();