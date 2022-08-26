import React from "react";

class NameForm extends React.Component{
    constructor(){
    super();
    this.state = {
        firstName : "",
        lastName : ""
    };
    }

    render(){
        const firstChange = (e)=>{
            console.log(e.target.value);
            this.setState({
              firstName:e.target.value
            })
        }
        const lastChange = (r) =>{
            console.log(r.target.value);
            this.setState ({
                lastName:r.target.value
            })
        }
        return(<>
                <form>
                <input placeholder="First Name" value={this.state.firstName} onChange={firstChange}/>
                <input placeholder="Last Name" value={this.state.lastName} onChange={lastChange}/>
                </form>
                <h3>My Full Name Is {this.state.firstName} {this.state.lastName}</h3>
            </>)
    }
}

export default NameForm
