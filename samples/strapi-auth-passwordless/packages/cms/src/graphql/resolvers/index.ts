import { me, loginByPasswordless } from "./user";

const Query = {
  me,
};
const Mutation = {
  loginByPasswordless,
};
export const resolversConfig: Strapi.Graphql.ResolverConfig = {
  "Mutation.loginByPasswordless": {
    auth: false,
  },
  "Query.me": {
    auth: true,
  },
};

export default { Query, Mutation };
