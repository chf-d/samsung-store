import React, { Component } from 'react'
import '../App.css';
import MainPage from './MainPage.js';
import CartPage from './CartPage.js';

export default class App extends Component {

  state = {
    flag: true,
    itemList: [
      { product: 'Samsung Galaxy Note 20', price: '3500 nis', img: 'https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/n/o/note_20_gray_b_w_pen_2.jpg' },
      { product: 'Samsung Galaxy s20', price: '3000 nis', img: 'https://www.ivory.co.il/files/catalog/org/1582804059q59HF.jpg' },
      { product: 'Samsung Galaxy Note 10', price: '2500 nis', img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/4890374/original/c8a6cee0269793da52f2bcd70489d58d.jpg' },
      { product: 'Samsung Galaxy s10', price: '2000 nis', img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/3712336/original/65e35934128767b5e0f87b13bf041d05.jpg' },
      { product: 'Samsung Galaxy buds live', price: '600 nis', img: 'https://www.lastprice.co.il/uploadimages/0425c33e32adde771844e5b9b38df5c2(1).jpg' },
      { product: 'Samsung Galaxy buds plus', price: '500 nis', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiyetKFCoAe1FLeb4GSn1SbVI7laQmo9XBDQ&usqp=CAU' }
    ],
    cardList: [],
    total: 0,
    FinishedOrder: []
  }

  show = () => {

    if (this.state.flag == true) {

      return (<div>
        {this.state.itemList.map((item) => {
          return <MainPage product={item.product} price={item.price} img={item.img} it={item} add={this.addToCard} />
        })}
      </div>)
    }
    else {
      return (<div>
        {this.state.cardList.map((item, i) => {
          return <CartPage product={item.product} price={item.price} img={item.img} it={item} ind={i} rem={this.removeFromCard} />
        })}
        <h2>total = {this.state.total}</h2>
        <button className='sistemButton' onClick={this.finish}>buy</button>
      </div>)
    }
  }

  addToCard = (item) => {
    this.setState({ cardList: [...this.state.cardList, item] })
    this.setState({ total: this.state.total + parseInt(item.price) })
  }

  removeFromCard = (item, ind) => {
    this.setState({ cardList: this.state.cardList.filter((e, i) => i != ind) })

    if (this.state.total > 0) {
      this.setState({ total: this.state.total - parseInt(item.price) })
    }
  }

  finish = () => {
    this.setState({ FinishedOrder: this.state.cardList })
    this.setState({ cardList: [] })
    this.setState({ total: 0 })
    alert('Order successfully received')
  }

  render() {
    return (
      <div className="App">

        <h1>Welcome to the Samsung Store</h1>
        <button className='sistemButton card' onClick={() => { this.setState({ flag: false }) }} >card</button>
        <button className='sistemButton home' onClick={() => { this.setState({ flag: true }) }}>home</button>
        {this.show()}

      </div>
    )
  }
}

