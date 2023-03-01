
import {useState,useEffect} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import Filter from './components/Filter/Filter'
import Cart from './components/Cart/Cart'
import data from './data.json'
import {Provider} from 'react-redux'
import store from './redux/store'


const App = () => {

  const [products,setProducts] = useState(data)
  const [sort,setSort] = useState("")
  const [size,setSize] = useState("")
  const [cartItems,setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

  const  handleFilterBySize = (e) => {
    setSize(e.target.value)
    let productClone = [...products]
    if(e.target.value === "All") {
      setProducts(data)
    }else {
      let newProducts = productClone.filter(product => product.sizes.indexOf(e.target.value) != -1)
      setProducts(newProducts)
    }
  }

  const handleFilterByOrder = (e) => {
    let order = e.target.value
    setSort(order)
    let productsClone = [...products]
    let newProducts = productsClone.sort( (a,b) => {
      if (order == "lower") {
        return a.price - b.price
      }else if (order == "highest") {
        return b.price - a.price
      }else {
        return a.id < b.id ? 1:-1
      }
    })
    setProducts(newProducts)
  }

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems]
    let isProductExist = false
    cartItemsClone.forEach(item => {
      if (item.id == product.id) {
        item.qty++
        isProductExist = true
      }
    })
    if (!isProductExist) {
      cartItemsClone.push({...product,qty:1})
    }
    setCartItems(cartItemsClone)
  }

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems]
    setCartItems(cartItemsClone.filter(item => item.id!= product.id))
  }

  useEffect(() => {
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
  },[cartItems])

  return (
    <Provider store={store}>
          <div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
            <Products
                    products={products}
                    addToCart={addToCart}
              />
            <Filter handleFilterBySize={handleFilterBySize} 
                    size={size}
                    sort={sort} 
                    handleFilterByOrder={handleFilterByOrder}
                    NumberOfProducts={products.length}
                    />
        </div>
        <Cart cartItems={cartItems}
              removeFromCart={removeFromCart}
        />
      </main>
      <Footer/>
    </div>
    </Provider>
  )
}

export default App