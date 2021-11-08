const Comics = require("../models/comics");

const namemap = (name)=>{
    if(name=="dilbert") return "Dilbert";
    else if(name=="garfield") return "Garfield";
    else if(name=="b.c.") return "B.C.";
    else if(name=="calvinandhobbes") return "Calvin and Hobbes";
    else if(name=="peanuts") return "Peanuts";
}

const getComics = async(req, res, next)=>{
    let name = req.params["name"];
    const page = req.query.page;
    if(name=="home"){
        try{
            const comics = await Comics.find({}, ["name", "link", "date", "source"], { sort: "-date", skip: Number(page), limit: 12 });
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
            const comics = await Comics.find({name: name},  ["name", "link", "date", "source"], { sort: "-date", skip: Number(page), limit: 10 });
            if(!comics){
                throw new Error("No matching Comic names found");
            }
            res.send(comics);
        } catch(e){
            res.status(500).send(e);
        }
    }
}

module.exports = { getComics };