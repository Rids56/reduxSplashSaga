import React from 'react'
import '../ImageGrid/style.css';
import { useDispatch } from 'react-redux';
import { cartAdd, cartEmpty, cartRemove } from '../../actions';


function Cart({ cartImages }) {
    const dispatch = useDispatch();
    return (
        <>
            <span className='cart-stats'>
                <button onClick={() => dispatch(cartAdd(cartImages))}>Add to Cart</button>
                <button onClick={() => dispatch(cartRemove(cartImages.id))}>Remove from Cart</button>
                <button onClick={() => dispatch(cartEmpty())}>Empty Cart</button>
            </span>
        </>
    )
}

export default Cart;