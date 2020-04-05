import React, { Component } from 'react';
import AddColor from './Add-Color-Component';
import DisplayColor from './Display-Color-Component';

class FavouriteColor extends Component {
    state = { 
        colorObjs: []
     }

     updateColorArray = (colObj) => {
         this.setState({
            colorObjs: [...this.state.colorObjs, colObj]
         });
        //this.setState(this.state.colorObjs.concat({name: 'name---',color: 'color--'}));
     }

     getDisplayComponent = (colorObj) => {
     return <DisplayColor key={colorObj.name} color={colorObj.color} name={colorObj.name}></DisplayColor>;
     }

    render() { 
        return ( 
            <div>
               <AddColor updateColorObjects={this.updateColorArray} ></AddColor>
               {this.state.colorObjs.map((colorObj) => this.getDisplayComponent(colorObj))}
            </div>
         );
    }
}
 
export default FavouriteColor;