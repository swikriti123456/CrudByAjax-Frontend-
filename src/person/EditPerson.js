import React, { Component } from 'react';
import personService from './personAxios';
class EditPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id: '',
                name: "",
                email: ""
        };
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
       personService.getPersonById(this.props.match.params.id)
                    .then((res)=>{
                        console.log(res);
                        this.setState({
                            id:res.data.id,
                            name:res.data.name,
                            email:res.data.email
                        });
                    });
    }
    submit=(event)=> {
        let user ={
            id:this.state.id,
            name:this.state.name,
            email:this.state.email};
        personService.updatePerson(user.id,user).then((res)=>{
            alert(res.data.message);
        });
        event.preventDefault();
    }
    idChange=(event)=> {
        this.setState({id:event.target.value});
    }
    nameChange=(event)=>{
        this.setState({name:event.target.value});
    }
    emailChange=(event)=>{
        this.setState({email:event.target.value});
    }
    render() {
        return (
            <div className="row">
                <div className="card center col-8">
                    <form onSubmit={this.submit}>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Id</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control" id="eid" value={this.state.id} onChange={this.idChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="i"  value={this.state.name} onChange={this.nameChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="i"  value={this.state.email} onChange={this.emailChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6"><button className="btn btn-warning btn-block" type="reset">reset</button></div>
                            <div className="col-sm-6"><button className="btn btn-primary btn-block">Save</button></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default EditPerson;