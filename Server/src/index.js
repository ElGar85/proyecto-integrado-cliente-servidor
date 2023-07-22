// const data = require("./utils/data");
require("dotenv").config(); //agrega a la variable process en la propiedad env los datos sencibles y no se suben al repo
// var http = require("http");
const morgan = require("morgan")
const cors = require("cors")
const { PORT, PASSWORD } = process.env;
var {getCharById} = require("./controllers/getCharById")
// express
const express = require('express');
const server = express();
// rutas
const characterRouter = require("./routes/character");
const userRouter = require("./routes/user");
const favoritesRouter = require("./routes/favorites")

// const PORT = 3001;
// middlewars
server.use(express.json()); //para poder recibir json desde el frond red.body
server.use(morgan("dev")); // me muestra en consola como req y res

// permisos de las Cors
// server.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Credentials', 'true');
//    res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//    );
//    res.header(
//       'Access-Control-Allow-Methods',
//       'GET, POST, OPTIONS, PUT, DELETE'
//    );
//    next();
// });

server.use(cors());

// rutas que usamos
server.use("/character", characterRouter);
server.use("/user", userRouter)
server.use("/favorites", favoritesRouter)



server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

// http.createServer((req,res)=>{
//     console.log(`Server raised in port ${PORT}`);
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const id = req.url.split("/").at(-1);  // '10'
//     if(req.url.includes("onsearch")){

//         return getCharById(res,id)

//         // const character = data.find((element) => element.id === Number(id));
//         // Creo un obj para responderlo
//         // const obj = { msg: "OK", character };
//         // if (character) {
//         //     return res
//         //       .writeHead(200, { "Content-type": "application/json" })
//         //       .end(JSON.stringify(obj));
//         //   } else {
//         //     const obj = {
//         //       msg: "Not Found",
//         //       error: `The character with the id ${id} was not found `,
//         //     };
//         //     return res
//         //       .writeHead(404, { "Content-type": "application/json" })
//         //       .end(JSON.stringify(obj));
//         //   }
//     }

//     if(req.url.includes("detail")){
//       return getCharById(res,id)
//     }
// }).listen(PORT, () => {
//   console.log("Servidor OK")
// });