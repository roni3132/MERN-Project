const mongoose = require('mongoose');
const DB = process.env.DB;
mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
    // useFindAndModify: false
}
).then(() => console.log('MongoDB connection established.'))
    .catch((error) => console.error("MongoDB connection failed:", error.message))
