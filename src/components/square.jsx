import React, { Component } from 'react';

class Square extends Component {
    
    render() { 
        return ( 
            <button className="" onClick={()=>{console.log('click');}}>
                {this.props.value}
            </button>
         );
    }
}
 
export default Square;