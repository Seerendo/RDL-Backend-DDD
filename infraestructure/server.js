const express = require('express');

class Server {
    constructor({router}){
        this._express = express();
        this._express.use(router);
    }

    start() {
        return new Promise((resolve, reject) => {
            const http = this._express.listen(3000, ()=> {
                console.log('Application running in: '+ 3000);
                resolve();
            });
        });
    }
}

module.exports = Server;