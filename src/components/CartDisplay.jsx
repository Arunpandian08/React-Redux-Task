
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveAllBlogs, addCartCount, decreaseCartCount, deleteProduct } from '../Features/cartSlice';
import { ProductContext } from '../MobilesData/Product';

const CartDisplay = () => {
    const { data } = useContext(ProductContext)
    // console.log("Cart", data);
    const cartData = useSelector((state) => state.cartData);
    // console.log("cartData",cartData);
    const dispatch = useDispatch();
    //useEffect of Run time rendering to show all data from saved blogs
    useEffect(() => {
        dispatch(saveAllBlogs(data.products))
    }, [dispatch, data.products])
    //dispatcher for add event handler
    const handleAddCart = (id, quantity) => {
        console.log('id:', id);
        dispatch(addCartCount({ id }));
    };
    // dispatcher for decrease event handler
    const handleDecreaseCart = (id, quantity) => {
        console.log('d-id:', id)
        dispatch(decreaseCartCount({ id }));
    };
    // dispatcher for remove or delete handle event
    const handleRemove = (id) => {
        dispatch(deleteProduct({ id }));
    };
    // to increase and decrease a product count with stored state of cartDate which accumulate with current product count 
    const productCount = useSelector((state) => {
        return state.cartData.reduce((acc, curr) => acc + (curr.quantity || 1), 0)
    })
    // to increase and decrease a Price with stored state of cartDate which accumulate with current product count 
    const totalAmount = useSelector((state) => {
        return state.cartData.reduce((acc, curr) => acc + curr.price * (curr.quantity || 1), 0)
    })
    return (
        <div className='container-fluid'>
            <div className="card-header sticky-top text-white bg-dark p-4" >
                <span className='count'> Number Of Products: <span className='total'>{productCount}</span> </span>
                <span className='count'>Total Price: <span className='total'>${totalAmount}</span></span>
            </div>
            {/* map all cartData */}
            {cartData.map((item, index) => (
                <div key={index} className="card h-100 m-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <div id={`carouselExample${index}`} className="carousel slide">
                                <div className="carousel-inner">
                                    {/* from item to map 1 or more images */}
                                    {item.images.map((mobImg, imgIndex) => (
                                        <div key={imgIndex} className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`}>
                                            <img src={mobImg} className="d-block w-100 rounded" alt={`slide ${imgIndex + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body" >
                                <h4 className="card-text">{item.brand}</h4>
                                <h6 className="card-title">{item.title}</h6>
                                <h4>${item.price}</h4>
                                <h6 className="card-text"><small className="text-body-secondary">{item.description}</small></h6>
                            </div>
                        </div>
                        <div className="d-flex col">
                            {/* button for add count with handle event */}
                            <button className='btn' id='plus' onClick={() => handleAddCart(item.id, item.quantity || 1)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor " class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                                </svg>
                            </button>
                            {/* button for decrease count with handle events  */}
                            <button className='btn' id='minus' onClick={() => handleDecreaseCart(item.id, item.quantity || 1)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash-square-fill" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1" />
                                </svg>
                            </button>
                            {/* buttton for delete product from cart with handle delete  */}
                            <button className='button p-3' onClick={() => handleRemove(item.id)}>
                                <svg viewBox="0 0 15 17.5" height="25" width="18" xmlns="http://www.w3.org/2000/svg" class="icon">
                                    <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    );
};
export default CartDisplay;