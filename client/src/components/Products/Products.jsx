
import '../../css/Products/Products.css'

const Products = ({products}) => {
    console.log(products)

    return (
        <div>
            <div className="products-wrapper">
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className="product-item">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-desc">
                                        <p>{product.title}</p>
                                        <span>{product.price}</span>
                                    </div>
                                    <button>Add to cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products