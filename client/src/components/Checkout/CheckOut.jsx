import {useState} from 'react'
import '../../css/Checkout/CheckOut.css'

const CheckOut = ({showForm,setShowForm,submitOrder,handleChange}) => {
    
    return (
        <>
        {
            showForm && (
                <div  className="checkout-form">
                <span onClick={() =>setShowForm(false)} className="close-icon">&times;</span>
                <form onSubmit={submitOrder}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required onChange={handleChange}/>
                    </div>
                    <div>
                        <button type="submit">Check Out</button>     
                    </div>
                </form>
            </div>
            )
        }
        </>
    )
}

export default CheckOut