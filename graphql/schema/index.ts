import { readFileSync } from 'fs'
import path from "path"
import mainGQl from "./main.graphql"
import secondGQl from "./second.graphql"

let typeDefs = mainGQl.definitions.concat(secondGQl.definitions);


export default typeDefs;