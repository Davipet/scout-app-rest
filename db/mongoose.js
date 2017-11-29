var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
    .catch(err => console.error(err))

module.exports = {mongoose};
