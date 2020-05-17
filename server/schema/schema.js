const graphql = require('graphql');
const _ = require('lodash');
const {GraphQLObjectType, GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt,GraphQLList} = graphql;

var books = [{id:'1',name:'Conecpt of Physics 1',genre:'Science',authorId:'1'},
{id:'2',name:'Mathematics',genre:'Maths',authorId:'2'},
{id:'3',name:'NCERT books',genre:'MHRD',authorId:'3'},
{id:'4',name:'Conecpt of Physics 2',genre:'Science',authorId:'1'}];

var authors = [{id:'1',name:'H C Verna',age:75},
{id:'2',name:'R D Sharma',age:70},
{id:'3',name:'MHRD',age:50}]; 

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
                return _.find(authors,{id:parent.authorId})
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        book:{
            type: new GraphQLList(BookType),
            resolve(parent,args){
                return _.filter(books,{authorId:parent.id})
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                // code to get the data from DB.
                // books.forEach(element => {
                //     console.log(element);
                //     if(element.id === args.id){
                //         return element;
                //     }
                // });
                return _.find(books,{id:args.id});
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(authors,{id:args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query:RootQuery
})