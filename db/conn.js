const mongoose = require('mongoose')
const url = "mongodb+srv://adityachauhan84523:adityachauhan84523@cluster0.jfosgnq.mongodb.net/landingpage"

const connectToMongo = async () => {
    try {
        await mongoose.connect(url)
        console.log('Connected to mongo')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectToMongo;