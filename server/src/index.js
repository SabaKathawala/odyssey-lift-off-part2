const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');

/**
Apollo Server is where all the elements we've built (the schema, the resolvers, and the data sources) come together in perfect coordination.
*/
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
        trackAPI: new TrackAPI()
    }
  }
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
`);
});
