import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/RTK/cartSlice';

const Cart = () => {
        const cartItems = useSelector((state) => state.cart?.cartItems ?? []);
        const dispatch = useDispatch();
    return (
        <div>
                <h1 className='text-2xl font-bold mb-4'>Cart</h1>
                {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                ) : (
                        <ul className='space-y-4'>
                                {cartItems.map(item => {
                                        const title = item.title || item.name || 'Product';
                                        const imageSrc = item.thumbnail || item.image || item.images?.[0] || '';
                                        const price = Number(item.price || 0);
                                        const qty = Number(item.quantity || 1);

                                        return (
                                            <li key={item.id} className='flex items-center gap-4 border border-border rounded p-4'>
                                                {imageSrc ? (
                                                    <img src={imageSrc} alt={title} className='w-16 h-16 object-cover' />
                                                ) : (
                                                    <div className='w-16 h-16 bg-muted flex items-center justify-center text-sm text-muted-foreground'>No Image</div>
                                                )}
                                                <div className='flex-1'>
                                                        <h2 className='text-lg font-semibold'>{title}</h2>
                                                        <p className='text-sm text-muted-foreground'>Qty: {qty}</p>
                                                        <p className='text-lg font-bold'>${price.toFixed(2)}</p>
                                                        <p className='text-sm font-semibold'>Item total: ${(price * qty).toFixed(2)}</p>
                                                </div>

                                                <button className='ml-auto bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
                                                        onClick={() => dispatch(removeFromCart(item.id))}
                                                >
                                                        Remove
                                                </button>
                                            </li>
                                        )
                                })}
                        </ul>
                )}
        </div>
    )
}

export default Cart