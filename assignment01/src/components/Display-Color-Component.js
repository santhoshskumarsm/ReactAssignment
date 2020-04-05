import React, { Component } from 'react';
import './Display-Color-Component.css';

class DisplayColor extends Component {
    render() { 
        return ( 
            <div>
            <br/>
            <div className="rectangle">
                <span>{this.props.name},</span>
                <span className="colorAlign">{this.props.color}</span>
                
            </div>
            </div>
         );
    }
}
 
export default DisplayColor;