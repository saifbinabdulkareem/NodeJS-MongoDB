const mongoose = require('mongoose');

// const mongooseURL = "mongodb+srv://saifbinabdulkarim:saif1888@cluster0-nigzk.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect("mongodb+srv://saifbinabdulkarim:saif1888@cluster0-nigzk.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true })

module.exports = mongoose;