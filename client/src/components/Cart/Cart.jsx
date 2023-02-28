import '../../css/Cart/Cart.css'
import CheckOut from '../Checkout/CheckOut'
import {useState} from 'react'

const Cart = ({cartItems,removeFromCart}) => {

    const [showForm,setShowForm] = useState(false)
    const [value,setValue] = useState("")

    const submitOrder = (e) => {
        e.preventDefault()
        const order = {
            name : value.name,
            email : value.email
        }
        console.log(order)
    }

    const handleChange = (e) => {
        setValue((prevState) => ({...prevState, [e.target.name] : e.target.value}))
    }

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
            {
                cartItems.length !== 0 && (
                    <div className="cart-footer">
                    <div className="total">Total : ${cartItems.reduce((acc,p) => {
                        return acc + p.price
                    },0)}</div>
                    <button onClick={() => setShowForm(true)}>Select Products</button>
                </div>
                )
            }
           <CheckOut  
                showForm={showForm} 
                setShowForm={setShowForm} 
                submitOrder={submitOrder}
                handleChange={handleChange}
                />
        </div>
    )
}

export default Cart