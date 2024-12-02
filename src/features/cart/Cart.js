import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
//import { XMarkIcon } from '@heroicons/react/24/outline'
//import { increment, incrementAsync, selectCount } from "./counterSlice";
import { selectCount } from "./cartSlice";
import { Link } from "react-router-dom";
export default function Cart() {
const products = [
        {
          id: 1,
          name: 'Throwback Hip Bag',
          href: '#',
          color: 'Salmon',
          price: '$90.00',
          quantity: 1,
          imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
          imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
          id: 2,
          name: 'Medium Stuff Satchel',
          href: '#',
          color: 'Blue',
          price: '$32.00',
          quantity: 1,
          imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
          imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
        },
        // More products...
      ]
    //const count = useSelector(selectCount);
//const dispatch = useDispatch();
const [open, setOpen] = useState(true)
return (
    <>
    <div>
    <div className="mx-auto mt-12 max-w-7xl bg-white px-4 sm:px-6 lg:px-8">
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
    <h2 className="text-4xl my-5 font-bold tracking-tight text-gray-900">Cart</h2>
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {products.map((product) => (
                        <li key={product.id} className="flex py-6">
                          <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
                          </div>
                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href={product.href}>{product.name}</a>
                                </h3>
                                <p className="ml-4">{product.price}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <div className="text-gray-500">
                            <label htmlFor="quantity" className="inline mr-5 text-sm font-medium leading-6 text-gray-900"> Password </label>
                                <select >
                                    <option value="1"> 1 </option>
                                    <option value="2"> 2 </option> 
                                </select>
                                 </div>
                              <div className="flex">
                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>
   <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>$262.00</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Checkout
                  </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{' '}
                    <Link to="/">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="font-medium text-indigo-600 hover:text-indigo-500">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                </button>
                </Link>
                    </p>
                   </div>
                   </div>
                   </div>
                   </div>
                    </>
  );
}