var express = require('express'),
    app = express(),
    graphqlHTTP = require('express-graphql'),
    schema = require('./schema/schema'),
    mongoose = require('mongoose');
    
mongoose.connect("mongodb://localhost/BookReader_GQL",{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("database connected.....")
});

app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}));

app.listen(4000, ()=>{
    console.log("GraphQl acquainted server live at PORT:4000");
})
