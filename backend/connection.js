const mongoose = require('mongoose');
require ('dotenv').config();
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://App_new:1234@cluster0.6f9jxdq.mongodb.net/App_new?retryWrites=true&w=majority', ()=>
{
    console.log("connected to mongodb");
});
