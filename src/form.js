import React, { Component } from 'react';
import Datadisplay from './datadisplay';
import './App.css';

class Form extends Component{
   
        
        state={
            Name:"",
            Department:"",
            Rating:"",
            Empdata:[],
            clicked:true
        }
    
    togglefunction =()=>{
        this.setState({clicked:!this.state.clicked})
    }
        changehandle =(event)=>{
            this.setState({[event.target.name] :event.target.value})
        }
        clickhandle =()=>{
            const objdata={
                name:this.state.Name,
                dept:this.state.Department,
                rate:this.state.Rating,
            }
            this.state.Empdata.push(objdata)
            this.setState({
                Empdata:this.state.Empdata,
                Name:"",
                Department:"",
                Rating:"",
                clicked:false
            })
            console.log(this.state.Empdata);
        }
    render(){
        return(
                <>
                
                {
                    this.state.clicked
                    ?
                    <>
                    <h1>EMPLOYEE FEEDBACK FORM</h1>
                    <form>
                    <label htmlFor='name'>Name :</label>
                    <input id='name' type='text' placeholder='Enter name' name='Name' value={this.state.Name} onChange={this.changehandle} required /> <br/>
                    <label htmlFor='dept'>Department :</label>
                    <input id='dept' type='text' placeholder='Enter department' name='Department' value={this.state.Department} onChange={this.changehandle} required /> <br/>
                    <label htmlFor='rate'>Rating :</label>
                    <input id='rate' type='number' placeholder='Enter rating' name='Rating' value={this.state.Rating} onChange={this.changehandle} required /> <br/>
                    <button type='button' onClick={this.clickhandle}>Submit</button>
                    </form>
                    </>
                    :
                    <Datadisplay value={this.state.Empdata} togglefun={this.togglefunction}/>
                    
                }
                


                </>
        )
    }
}

export default Form;