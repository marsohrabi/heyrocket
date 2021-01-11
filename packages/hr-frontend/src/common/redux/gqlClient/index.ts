import { GraphQLClient } from "graphql-request";

export const ENDPOINT = "http://localhost:4000"

export const client = new GraphQLClient(`${ENDPOINT}/graphql`, {
    mode: "cors",
});