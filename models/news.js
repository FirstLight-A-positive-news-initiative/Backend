const mongoose = require("mongoose");

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
            trim: true
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
        genre: {
            type: String,
            required: true,
            trim: true,
        }
    }
);
 
module.exports = mongoose.model("News", newsSchema);
