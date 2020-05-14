var express = require('express'),
    app = express(),
    graphqlHTTP = require('express-graphql');
    
app.use('/graphql',graphqlHTTP({

}));

app.listen(4000, ()=>{
    console.log("GraphQl acquainted server live at PORT:4000");
})
