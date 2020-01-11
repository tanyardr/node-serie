const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/noderest', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });

mongoose.connection.on('connected', function () {
    console.log('=====Conexão estabelecida com sucesso====='); 
});
mongoose.connection.on('error', function (err) {
    console.log('=====Ocorreu um erro: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('=====Conexão finalizada=====');
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
