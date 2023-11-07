// npm pkg set type="module" allows us to use import and stuff es6
// import { ApolloServer } from '@apollo/server';
// import {startStandaloneServer} from '@apollo/server/standalone';
  // "type": "module" in package json


//EXPRESS IMPORTS
const express = require('express');
const bodyParser= require("body-parser");
const ejs = require("ejs");
const cors = require('cors');

//APOLLO GRAPHQL IMPORTS
const {ApolloServer} = require('@apollo/server')
const {startStandaloneServer} = require('@apollo/server/standalone');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');
// const graphqlHTTP = require('express-graphql');
const {expressMiddleware} = require('@apollo/server/express4');

// DATABASE CONNECTION
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ApprovalSystem");
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});


//SERVER SETUP
async function startStartServer() {
    //EXPRESS SETUP
    const app = express();
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());

    //GRAPHQL SETUP
    console.log(typeDefs,resolvers);
    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers 
    });    
    const {url} = await startStandaloneServer(server,{
        listen: {port:4000}
    })
    console.log(url);
    app.use("/graphql",expressMiddleware(server))

    //ALTERNATIVE EXPRESS WAY TO START SERVER
    // app.listen(4000 , ()=>{
    //     console.log('listening on 4000')
    // });
    // await server.start();
}

startStartServer()


//  ! -> required field
//Query type is default required , entry points in graph after which they r free to navigate