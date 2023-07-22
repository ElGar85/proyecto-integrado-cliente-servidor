const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req,res){
    const {id} = req.params;
    
    try{
        const resp = await axios(`${URL}${id}`);
        const {data} = resp;
        if(data.error){
            return res.status(404).send(data.error)
        }
            const character = {
                id:Number(data.id),
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
            }
            return res.status(200).json(character);

    }catch(error){
        return res.status(500).send(error.message) 
    }
    // axios(`${URL}${id}`)
    // .then((resp) => {
    //     const { data} = resp;
    //     if(data.error){
    //         return res.status(404).send(data.error)
    //     }
    //     const character = {
    //         id:Number(data.id),
    //         name: data.name,
    //         gender: data.gender,
    //         species: data.species,
    //         origin: data.origin,
    //         image: data.image,
    //         status: data.status,
    //     }
    //     return res.status(200).json(character);
    // })
    // .catch((err)=>{
    //     return res.status(500).send(err.message)
    // }) 
}

module.exports = {getCharById}