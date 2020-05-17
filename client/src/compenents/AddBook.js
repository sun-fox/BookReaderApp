import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import {flowRight as compose } from 'lodash'
import { getAuthorsQuery,addBookMutation } from '../queries/queries'

export class AddBook extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            genre:"",
            authorId:""
        }
    }

    SubmitForm(e){
        e.preventDefault();
        this.props.addBookMutation({
            variables:{
                name:this.state.name,
                genre:this.state.genre,
                authorId:this.state.authorId
            }
        });
    }

    displayAuthors(){
        var data = this.props.getAuthorsQuery;
        if(data.loading){
            return(<option disabled>Loading Authors</option>);
        }else{
            return data.authors.map(author=>{
            return(<option key={author.id} value={author.id}>{author.name}</option>)
            })
        }
    }
    render() {
        return (
            <form id="add-book" onSubmit={this.SubmitForm.bind(this)}>
                <div className="field">
                    <label>Book Name:</label>
                    <input type="text" onChange={(e)=>this.setState({name:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e)=>this.setState({genre:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select  onChange={(e)=>this.setState({authorId:e.target.value})}>
                        <option>select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        )
    }
}

export default compose(
    graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
    graphql(addBookMutation,{name:"addBookMutation"}),
)(AddBook)

