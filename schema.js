import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql';

let count = 0;

// 编写 Schema，GraphQLSchema 实例
let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        // add the description
        description: 'The count!',
        resolve: function() {
          return count;
        }
      }
    }
  })
});

export default schema;
