const mongoose = require("mongoose");
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.oani9.mongodb.net/firstlight?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            throw new Error("Failed to connect to cluster.");
        } else {
            console.log("Connected to cluster.");
        }
    }
);
