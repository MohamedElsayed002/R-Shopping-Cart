import '../../css/Cart/Cart.css'

const Cart = ({cartItems,removeFromCart}) => {
    console.log(cartItems)
    return (
        <div className="cart-wrapper">
            <div className="cart-title">{cartItems.length === 0 ? "Empty Cart" : <p>There is {cartItems.length} products in cart</p>}</div>
            <div className="cart-items">
                {
                    cartItems.map(item => {
                        return (
                            <div className="cart-item">
                            <img src={item.image} alt="" />
                            <div className="cart-info" key={item.id}>
                                <div>
                                    <p>title {item.title}</p>
                                    <p>qty : {item.qty}</p>
                                    <p>price ${item.price}</p>
                                </div>
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart