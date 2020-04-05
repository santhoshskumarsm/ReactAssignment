import React, { Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

class AddColor extends Component {
    state = {
        color:"",
        name:""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        
    }

    passColorObj = () => {
        this.props.updateColorObjects(this.state);
    }

    render() { 
        return ( <div className="form-group">
            <span>Color:</span> 
               <input className="form-control" type="text" id="color" value={this.state.color} onChange={e => this.handleChange(e)} ></input>
               <br></br>
               <span>Name:</span> 
               <input className="form-control" type="text" id="name" value={this.state.name} onChange={e => this.handleChange(e)}></input>
               <br/>
               <br/>
               <button type="button" onClick={this.passColorObj}>Add</button>
        </div> );
    }
}
 
export default AddColor;