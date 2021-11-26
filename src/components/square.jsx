import React, { Component } from 'react';

function Square(props){
            return ( 
            <button className="content" onClick={props.onClick}>
                {props.value}
            </button>
         );
}
 
export default Square;