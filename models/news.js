const mongoose = require("mongoose");
const validator = require("validator");

const newsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        link: {
            type: String,
            required: true,
            trim: true,
        },
        image_link: {
            type: String,
            trim: true,
            default: `https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png` // Change this in future
        },
        summary: {
            type: String,
            required: true,
        },
        positivity_score: {
            type: Number,
            required: true,
            min: 0,
            max: 100,
        },
        date: {
            type: Date,
            required: true,
        },
    }
);

const Entertainment = mongoose.model("Entertainment", newsSchema);
const Sports = mongoose.model("Sports", newsSchema);
const Politics = mongoose.model("Politics", newsSchema);
const Technology = mongoose.model("Technology", newsSchema);
const Science = mongoose.model("Science", newsSchema);

module.exports = {
    Entertainment, 
    Sports, 
    Politics, 
    Technology, 
    Science
};