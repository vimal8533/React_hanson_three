import React, { Component } from "react";
import './App.css';

class Datadisplay extends Component{
    constructor(props){
        super(props);
        console.log(this.props.value);
    }
render(){
    return(
        <>
           
            <h1>EMPLOYEE FEEDBACK DATA</h1>
            <div className="parent_box">
            {this.props.value.map((item,index)=>{
                return(
                    <div className="content_box">
                    <span key={index}>Name:{item.name}|Department:{item.dept}|Rating:{item.rate}</span>
                    </div>
                )
            })}
                <br/>
            
            </div>
            <div className="btn" >
            <button onClick={this.props.togglefun} >Go back</button>
            </div>
            
        </>
    )
}

}
export default Datadisplay;