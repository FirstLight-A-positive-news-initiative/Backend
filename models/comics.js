const mongoose=require("mongoose");

const comicsSchema=new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        link: {
            type: String,
            required: true,
            trim: true,
        },
        date: {
            type: Date,
            required: true,
        },
        source: {
            type: String,
            required: true,
            trim: true,
        }
    }
);

module.exports = mongoose.model("Comics", comicsSchema);