
import {useState} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import Filter from './components/Filter/Filter'
import data from './data.json'

const App = () => {

  const [products,setProducts] = useState(data)
  const [sort,setSort] = useState("")
  const [size,setSize] = useState("")

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

  return (
    <div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
            <Products products={products}/>
            <Filter handleFilterBySize={handleFilterBySize} 
                    size={size}
                    sort={sort} 
                    handleFilterByOrder={handleFilterByOrder}/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App