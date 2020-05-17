var express = require('express'),
    app = express(),
    graphqlHTTP = require('express-graphql'),
    schema = require('./schema/schema');
    
app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}));

app.listen(4000, ()=>{
    console.log("GraphQl acquainted server live at PORT:4000");
})
