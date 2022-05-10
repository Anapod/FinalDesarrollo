const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://AnaAG:Ana00370358@cluster0.b6a7w.mongodb.net/miapp?retryWrites=true&w=majority')

const Animal = mongoose.model('User',{
    name: String,
    type: string,
})