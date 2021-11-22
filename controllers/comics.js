const Comics = require("../models/comics");

const namemap = (name)=>{
    if(name=="dilbert") return "Dilbert";
    else if(name=="garfield") return "Garfield";
    else if(name=="calvinandhobbes") return "Calvin and Hobbes";
    else if(name=="peanuts") return "Peanuts";
    else if(name=="dennis") return "Dennis the Menace";
}

const getComics = async(req, res, next)=>{
    let name = req.params["name"];
    const page = req.query.page;
    if(name=="home"){
        try{
            const comics = await Comics.find({}, ["name", "link", "date", "source"], { sort: "-date", skip: 12 * Number(page), limit: 12 });
            if(!comics){
                throw new Error("No matching Comic names found");
            }
            res.send(comics);
        } catch(e){
            res.status(500).send(e);
        }
    } else{
        try{
            name=namemap(name);
            const comics = await Comics.find({name: name},  ["name", "link", "date", "source"], { sort: "-date", skip: 12 * Number(page), limit: 10 });
            if(!comics){
                throw new Error("No matching Comic names found");
            }
            res.send(comics);
        } catch(e){
            res.status(500).send(e);
        }
    }
}

const getSingleComic = async (req, res) => {
    const { id } = req.params;
    
    try {
        const comic = await Comics.findById(id);
        res.status(200).send(comic);
    } catch(err) {
        res.status(500).send(err);
    }
}

module.exports = { getComics, getSingleComic };