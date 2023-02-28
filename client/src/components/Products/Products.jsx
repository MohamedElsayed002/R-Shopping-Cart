
import '../../css/Products/Products.css'
import {useState} from 'react'
import ProductModal from './ProductModal'
import Bounce from 'react-reveal/Bounce'


const Products = ({products,addToCart}) => {

    const [product,setProduct] = useState("")

    const openModal = (product) => {
        setProduct(product)
    }
    
    const closeModal = () => {
        setProduct(false)
    }
    
    return (
        <Bounce left cascade>
        <div>
            <div className="products-wrapper">
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className="product-item">
                                <a href="#" onClick={() => openModal(product)}>
                                    <img src={product.image} alt={product.title} />
                                </a>
                                    <div className="product-desc">
                                        <p>{product.title}</p>
                                        <span>{product.price}</span>
                                    </div>
                                    <button onClick={() => addToCart(product)}>Add to cart</button>
                            </div>
                        )
                    })
                }

                <ProductModal product={product} closeModal={closeModal}/>


            </div>
        </div>
    </Bounce>
    )
}

export default Products