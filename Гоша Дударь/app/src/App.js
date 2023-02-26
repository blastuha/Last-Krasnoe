import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import ItemsList from './layout/ItemsList'
import Categories from './layout/Categories'
import ShowFullItem from './layout/ShowFullItem'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул белый',
          img: './items/стул.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'chairs',
          price: '49.99',
        },
        {
          id: 2,
          title: 'Кровать синяя',
          img: './items/кровать.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'sofas',
          price: '49.99',
        },
        {
          id: 3,
          title: 'Шторы',
          img: './items/шторы.png',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'curtains',
          price: '49.99',
        },
        {
          id: 4,
          title: 'Стол деревянный',
          img: './items/стол.jpeg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'tables',
          price: '49.99',
        },
        {
          id: 5,
          title: 'Ваза',
          img: './items/ваза.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'vases',
          price: '49.99',
        },
        {
          id: 6,
          title: 'Ваза',
          img: './items/ваза.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'vases',
          price: '49.99',
        },
      ],
      orders: [],
      currentItems: [],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true
      }
    })

    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] }, () => {
        console.log(this.state.orders)
      })
    }
  }

  deleteOrder(id) {
    const newOrders = this.state.orders.filter((orderId) => orderId.id !== id)
    this.setState({
      orders: newOrders,
    })
  }

  chooseCategory(category) {
    // фильтруем не currentItems, а общий массив
    const itemsOfCategory = this.state.items.filter(
      (el) => el.category === category
    )
    this.setState({ currentItems: itemsOfCategory })
    // а меняем состояние currentItems, не трогая items (общий массив)

    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
    }
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  render() {
    return (
      <div className='wrapper'>
        <Header
          orders={this.state.orders}
          deleteOrder={this.deleteOrder}
        />
        <Categories chooseCategory={this.chooseCategory} />
        <ItemsList
          items={this.state.currentItems}
          addToOrder={this.addToOrder}
          onShowItem={this.onShowItem}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullItem}
            addToOrder={this.addToOrder}
            onShowItem={this.onShowItem}
          />
        )}
        <Footer />
      </div>
    )
  }
}

export default App
