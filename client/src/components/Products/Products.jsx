
import '../../css/Products/Products.css'
import {useState} from 'react'
import ProductModal from './ProductModal'

const Products = ({products}) => {

    const [product,setProduct] = useState("")

    const openModal = (product) => {
        setProduct(product)
    }
    
    const closeModal = () => {
        setProduct(false)
    }
    
    return (
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
                                    <button>Add to cart</button>
                            </div>
                        )
                    })
                }

                <ProductModal product={product} closeModal={closeModal}/>


            </div>
        </div>
    )
}

export default Products