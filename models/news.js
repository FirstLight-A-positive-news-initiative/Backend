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

newsSchema.statics.findByTitle = async (search_query) => {
    const news_in_entertainment = await Entertainment.find(
        {
            title: { $regex: new RegExp(`${search_query}`, `i`) }
        }
    );
    
    const news_in_sports = await Sports.find(
        {
            title: { $regex: new RegExp(`${search_query}`, `i`) }
        }
    );

    const news_in_politics = await Politics.find(
        {
            title: { $regex: new RegExp(`${search_query}`, `i`) }
        }
    );

    const news_in_technology = await Technology.find(
        {
            title: { $regex: new RegExp(`${search_query}`, `i`) }
        }
    );

    const news_in_science = await Science.find(
        {
            title: { $regex: new RegExp(`${search_query}`, `i`) }
        }
    );

    return [...news_in_entertainment, ...news_in_sports, ...news_in_politics, ...news_in_technology, ...news_in_science];

}

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