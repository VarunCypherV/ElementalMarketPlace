const typeDefs = `#graphql

    type Game{
        id: ID!,
        title: String!,
        platform : [String!]!
        reviews: [Review!]
    }

    type Review{
        id: ID!,
        rating: String!, 
        content : String!
        game : Game!
        author : Author!
        reviews: [Review!]
    }

    type Author{
        id: ID!,
        name: String!,
        verified : Boolean!
    }
    type Query {
        reviews : [Review]
        review(id: ID!):Review
        games: [Game]
        authors: [Author]
    }
    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!,edits : EditGameInput!): Game

    }
    input AddGameInput { 
        title :String!,
        platform: [String!]!
    }
    input EditGameInput { 
        title :String,
        platform: [String!]
    }
`
//  ! -> required field
//Query type is default required , entry points in graph after which they r free to navigate
//input so that u can use this elsewhere to specify this inputs
module.exports = typeDefs;