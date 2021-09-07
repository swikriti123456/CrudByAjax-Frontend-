import React, { Component } from 'react';
import {Link }from 'react-router-dom';
import personService from './personAxios';

class ListPerson extends Component{
    constructor(props){
        super(props);
        this.state={
            person:[]

        };
    }
    
    componentDidMount(){
            personService.getAllPerson().then((res)=>{
             this.setState({person:res.data});
         });
    }

    onDelete=(id)=>{
        personService.deletePerson(id).then((res)=>{
            alert(res.data.message);
            personService.getAllPerson().then((res)=>{
                this.setState({person:res.data});
            });
        })
    }
    render(){
        return (
            <div >
                {
                    this.state.person.length>0 ?(
                        <table className="table">
                            <thead><tr><th>Id</th><th>Name</th><th>Email</th><th>edit/delete</th></tr></thead>
                        <tbody>
                        {this.state.person.map((person)=>(
                            <tr key={person.id} >
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.email}</td>
                                <td><Link to={`/edit/${person.id}`}><i className="far fa-edit text-warning"></i></Link> / <button onClick={()=>{this.onDelete(person.id)}} className="btn btn-link"><i className="far fa-trash-alt text-danger"></i></button></td>
                            </tr>
                        
                        ))}</tbody></table>
                    ):(<h1>Loading</h1>)
                }
            </div>
        );
    }
}

export default ListPerson;