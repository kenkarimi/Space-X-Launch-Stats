//GraphQL Works at the application layer unlike, say, MySQL which works at the data layer thus allowing you to use any type of database.
//Unlike API's which are all or nothing, GraphQL allows you to only request for the specific items of data you need this trimming down size of the request.
//Large SW i.e. Facebook with millions of users can save on bandwidth, process requests faster by only requesting for the items of data needed and nothing more, as would happen with an API.

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const app = express();

//Allow cross-origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running on port 5000...');
});