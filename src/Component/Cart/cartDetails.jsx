import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartRemove } from '../../actions';

function cartDetails() {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state?.cartImages);
    let likesCount = 0;
    
    return (
        <div className='content'>
            <div className='backLink'>
                <Link to='/'>
                    <span>Go to product link</span>
                </Link>
            </div>
            <div className='grid'>
                {cartData?.length > 0 ? (
                    <table className='tableDetails'>
                        <tr>
                            <td>Id</td>
                            <td>Likes</td>
                            <td>Description</td>
                            <td>Actions</td>
                        </tr>
                        {cartData?.map((image) => {
                            likesCount = likesCount + image.likes;
                            return (
                                <tr>
                                    <td>{image.id}</td>
                                    <td>{image.likes}</td>
                                    <td>{image.alt_description}</td>
                                    <td><button className='actionBtn' onClick={() => dispatch(cartRemove(image.id))}>Remove Item</button></td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td></td>
                            <td>{likesCount}</td>
                            <td></td>
                        </tr>
                    </table>
                ) : (
                    <div className='nodata'>
                        <h1>No Data Found</h1>
                    </div>
                )}

            </div>
        </div>
    )
}

export default cartDetails;