const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost', { useNewUrlParser: false }).then(()=>{
    console.log("Connected database");
});
mongoose.Promise = global.Promise;

module.exports = mongoose;