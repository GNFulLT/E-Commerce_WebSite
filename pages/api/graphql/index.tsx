import { gql,ApolloServer } from "apollo-server-micro" 
import {typeDefs,resolvers} from "../../../graphql/index"
const apolloServer = new ApolloServer({
    typeDefs,resolvers
});

const startServer = apolloServer.start();

export default async function handler(req:any, res:any) {

    await startServer;
    await apolloServer.createHandler({
      path: "/api/graphql",
    })(req, res);
  }
export const config = {
    api:{
        bodyParser: false
    }
}

