import React, { Component } from 'react'

export default class MainPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className='AllItems'>
                <img className="imgSize" src={this.props.img}/>
                <h4>{this.props.product}</h4>
                <h6>{this.props.price}</h6>
                <button className='button' onClick={()=>{this.props.add(this.props.it)}}>Add to cart</button>
            </div>
        )
    }
}
