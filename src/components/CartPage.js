import React, { Component } from 'react'

export default class CartPage extends Component {

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
                <button className='button' onClick={()=>{this.props.rem(this.props.it, this.props.ind)}}>Remove</button>
            </div>
        )
    }
}
