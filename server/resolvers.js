//u need solvers for every in Query in schema , get data not edit
const {db} = require('./_db.js');

const resolvers = {
    Query: { //resolvers for entry points of app
        games() { //get all
            return db.games
        },
        review(parent,args,context) { 
            //parent resolver in a chain
            //access query variable sent with variable
            //context : across queries like authentication
            return db.reviews.find((review)=> review.id===args.id )
        }
        //names must match the Query ones
    }, 
    Game: { //example for nested chain of data , now parent is parent rsolver value ie Game's resolver in Query
        reviews (parent) {
            return db.reviews.filter((r)=> r.game_id===parent.id)
        }
    },
    Review: { //example for nested chain of data , now parent is parent rsolver value ie Game's resolver in Query
        reviews (parent) { //find to find single one filtre to get bunch
            return db.reviews.find((a)=> a.id===parent.author.id)
        },
    },
    Mutation : {
        deleteGame(parent,args,context){
            db.games = db.games.filter((g)=> g.id!==args.id)
            //if mongo do mongo command here
            return db.games
        },
        addGame(_,args){
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.games.push(game)
        },
        updateGame(_,args){
            db.games = db.games.map((g)=> {
                if(g.id === args.id){
                    return {...g,...args.edits}
                }
                return g
            })
            return db.games.find((g)=> g.id === args.id)
        }
        
    }
}

module.exports = resolvers;