import React from 'react'
import './CartTotal.css'

function CartTotal({total}) {
    return (
        <div className="Cart-Total">
            <h2>El total es {total}</h2>
        </div>
    )
}

export default CartTotal

