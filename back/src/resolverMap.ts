import { IResolvers } from "graphql-tools";
import { login } from "./responsable/resolvers/login";
import { responsables } from "./responsable/resolvers/responsables";

const helloWorld = (): string => "Hello world";

const resolverMap: IResolvers = {
  Query: {
    helloWorld,
    responsables,
  },
  Mutation: {
    login,
  },
};
export default resolverMap;
