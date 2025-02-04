const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/creanunate'

module.exports = () =>{

    const connect = () => {
        url,
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (err) {
                console.log('db: ERROR!!');
            } else {
                console.log('Conexión correcta con creanunate')
            }
        }
    }

    connect();
}