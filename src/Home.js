import React, { Component } from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            UserName:'Ashutosh'
        };
    }
    render(){
        return (/* jsx */
            <div>
                <h1>Welcome {this.state.UserName} {this.props.data}</h1>
                <p>This is home component</p>
            </div>
            
        );
    }
}
export default Home;