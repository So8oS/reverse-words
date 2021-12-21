import React, { Component } from 'react'
import "./box.css";

class Box extends Component {
    constructor(){
    super();

    this.state = {
        rev:""
    }
}

 reverse = (word) => {
     let reversed = word.split("").reverse().join("");
    return reversed;



}
    render() {
        return (

        <div className='container'>
            <div className='inside'>
            <h1  className='title'>Reverse words</h1>            
                <div className='inputwrap'>
                    {/* <h1>{this.state.input}</h1> */}
                    <input className='input' type="text" placeholder='Enter words to reverse' onChange={ (e) => {
                        this.rev = e.target.value;
                     }}/>
                    <button type='submit' onClick={ () => this.setState({rev: this.reverse(this.rev)})} >Reverse</button>
                </div>
           <div className='res'><h1>{this.state.rev}</h1></div>
            
           
            </div>
        </div>
        )
    }
}

export default Box;