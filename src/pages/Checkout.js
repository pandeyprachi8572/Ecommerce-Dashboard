// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// const products = [
// {
//       id: 1,
//       name: 'Throwback Hip Bag',
//       href: '#',
//       color: 'Salmon',
//       price: '$90.00',
//       quantity: 1,
//       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//       imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
// },
//     {
//       id: 2,
//       name: 'Medium Stuff Satchel',
//       href: '#',
//       color: 'Blue',
//       price: '$32.00',
//       quantity: 1,
//       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//       imageAlt:
//         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//  },
//     // More products...
// ]
// const addresss = [
//     {
//   name: 'John wick',
//   street :"11th Main",
//   city :" Delhi",
//   pinCode :110001,
//   state :'Delhi',
//   phone :7896543256
//     },
//     {
//   name: 'rohan wick',
//   street :"15th Main",
//   city :" Banglore ",
//   pinCode :989809,
//   state :'karnatak',
//   phone :7896543908
//   },
//   {
//   name: 'sohan wick',
//   street :"20th Main",
//   city :" kolkata ",
//   pinCode :989809,
//   state :'karnatak',
//   phone :7896555908
//   },
//   {
//   name: 'Mohan wick',
//   street :"20th Main",
//   city :" Mumbai ",
//   pinCode :989809,
//   state :'karnatak',
//   phone :789659897,
// }   
// ]  
// //const count = useSelector(selectCount);
// //const dispatch = useDispatch();
// function Checkout () {
// const [open, setOpen] = useState(true)
// return (
// <>
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
//         <div className="lg:col-span-3">
//         <form className="bg-white px-5 mt-12 py-12">
//         <div className="space-y-12">
//            <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base/7 font-semibold text-xl text-gray-900">Personal Information</h2>
//           <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>
//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
//                 First name
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="first-name"
//                   name="first-name"
//                   type="text"
//                   autoComplete="given-name"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-3">
//               <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
//                 Last name
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="last-name"
//                   name="last-name"
//                   type="text"
//                   autoComplete="family-name"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>
// <div className="sm:col-span-4">
// <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//                 Email address
// </label>
// <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-3">
//               <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
//                 Country
//               </label>
//               <div className="mt-2 grid grid-cols-1">
//                 <select
//                   id="country"
//                   name="country"
//                   autoComplete="country-name"
//                   className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 >
//                   <option>United States</option>
//                   <option>Canada</option>
//                   <option>Mexico</option>
//                 </select>
//               </div>
//             </div>
// <div className="col-span-full">
//               <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
//                 Street address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="street-address"
//                   name="street-address"
//                   type="text"
//                   autoComplete="street-address"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
//                 City
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="city"
//                   name="city"
//                   type="text"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
//                 State / Province
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="region"
//                   name="region"
//                   type="text"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
//                 ZIP / Postal code
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="postal-code"
//                   name="postal-code"
//                   type="text"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button type="button" className="text-sm/6 font-semibold text-gray-900">
//           Reset
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Add Address
//         </button>
//       </div>
        
//           <h2 className="text-base/7 font-semibold text-gray-900">Address</h2>
//           <p className="mt-1 text-sm/6 text-gray-600">
//       Choose from Existing addresses
//           </p>
//           <ul role="list">
//       {addresss.map((addresss) => (
//         <li key={addresss.email} className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200 " >
//           <div className="flex min-w-0 gap-x-4">
          
//                   <input 
//                     name="addresss"
//                     type="radio"
//                     className="h-4 w-4 border-gray-800 text-indigo-600"
//                   />
//             <div className="min-w-0 flex-auto">
//               <p className="text-sm/6 font-semibold text-gray-900">{addresss.name}</p>
//               <p className="mt-1 truncate text-xs/5 text-gray-500">{addresss.street}</p>
//               <p className="mt-1 truncate text-xs/5 text-gray-500">{addresss.city}</p>
//               <p className="mt-1 truncate text-xs/5 text-gray-500">{addresss.pinCode}</p>
//               <p className="mt-1 truncate text-xs/5 text-gray-500">{addresss.state}</p>
//               <p className="mt-1 truncate text-xs/5 text-gray-500">{addresss.phone}</p>
//               </div>
//             </div>         
//         </li>
//       ))}
//     </ul>
//           <div className="mt-10 space-y-10">
//             <fieldset>
//               <legend className="text-sm/6 font-semibold text-gray-900"> Payment Methods </legend>
//               <p className="mt-1 text-sm/6 text-gray-600"> Choose One  </p>
//               <div className="mt-6 space-y-6">
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     defaultChecked
//                     id="cash "
//                     name="push-notifications"
//                     type="radio"
//                     className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
//                   />
//                   <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">
//                   Cash
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="card"   
//                     name="push-notifications"
//                     type="radio"
//                     className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
//                   />
//                   <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">
//                     Card Payment 
//                   </label>
                
//                 </div>
//               </div>
//             </fieldset>
//           </div>
//         </div>
//       </div>
      
//     </form>
//     </div>
//     <div className="lg:col span-2">
//     <div className="mx-auto mt-12 max-w-7xl bg-white px-0 sm:px-0 lg:px-0">
//     <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//     <h2 className="text-4xl my-5 font-bold tracking-tight text-gray-900">Cart</h2>
//                   <div className="flow-root">
//                     <ul role="list" className="-my-6 divide-y divide-gray-200">
//                       {products.map((product) => (
//                         <li key={product.id} className="flex py-6">
//                           <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
//                             <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
//                           </div>
//                           <div className="ml-4 flex flex-1 flex-col">
//                             <div>
//                               <div className="flex justify-between text-base font-medium text-gray-900">
//                                 <h3>
//                                   <a href={product.href}>{product.name}</a>
//                                 </h3>
//                                 <p className="ml-4">{product.price}</p>
//                               </div>
//                               <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//                             </div>
//                             <div className="flex flex-1 items-end justify-between text-sm">
//                               <div className="text-gray-500">
//                             <label htmlFor="quantity" className="inline mr-5 text-sm font-medium leading-6 text-gray-900"> Qty </label>
//                                 <select >
//                                     <option value="1"> 1 </option>
//                                     <option value="2"> 2 </option> 
//                                 </select>
//                                  </div>
//                               <div className="flex">
//                                 <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
//                                   Remove
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   </div>
//            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//                 <div className="flex justify-between text-base font-medium text-gray-900">
//                   <p>Subtotal</p>
//                   <p>$262.00</p>
//                 </div>
//                 <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
//                 <div className="mt-6">
//                   <Link
//                     to="/Checkout"
//                     className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//                   >
//                     Pay and Order 
//                   </Link>
//                 </div>
//                 <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//                   <p>
//                     or{' '}
//                     <Link to="/">
//                     <button
//                       type="button"
//                       onClick={() => setOpen(false)}
//                       className="font-medium text-indigo-600 hover:text-indigo-500">
//                       Continue Shopping
//                       <span aria-hidden="true"> &rarr;</span>
//                 </button>
//                 </Link>
//                     </p>
//                    </div>
//                    </div>
//                    </div>
//     </div>
//     </div>
//     </div>
//     </>
//   )
// }
// export default  Checkout;                                                                                 import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteItemFromCartAsync,
  selectItems,
  updateCartAsync,
} from '../features/cart/cartSlice';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { updateUserAsync } from '../features/user/userSlice';
import { useState } from 'react';
import {
  createOrderAsync,
  selectCurrentOrder,
  selectStatus,
} from '../features/order/orderSlice';
import { selectUserInfo } from '../features/user/userSlice';
import { Grid } from 'react-loader-spinner';

function Checkout() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const user = useSelector(selectUserInfo);
  const items = useSelector(selectItems);
  const status = useSelector(selectStatus);
  const currentOrder = useSelector(selectCurrentOrder);

  const totalAmount = items.reduce(
    (amount, item) => item.product.discountPrice * item.quantity + amount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ id: item.id, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
  };

  const handleAddress = (e) => {
    console.log(e.target.value);
    setSelectedAddress(user.addresses[e.target.value]);
  };

  const handlePayment = (e) => {
    console.log(e.target.value);
    setPaymentMethod(e.target.value);
  };

  const handleOrder = (e) => {
    if (selectedAddress && paymentMethod) {
      const order = {
        items,
        totalAmount,
        totalItems,
        user: user.id,
        paymentMethod,
        selectedAddress,
        status: 'pending', // other status can be delivered, received.
      };
      dispatch(createOrderAsync(order));
      // need to redirect from here to a new page of order success.
    } else {
      
      alert('Enter Address and Payment method');
    }
  };

  return (
    <>
      {!items.length && <Navigate to="/" replace={true}></Navigate>}
      {currentOrder && currentOrder.paymentMethod === 'cash' && (
        <Navigate
          to={`/order-success/${currentOrder.id}`}
          replace={true}
        ></Navigate>
      )}
      {currentOrder && currentOrder.paymentMethod === 'card' && (
        <Navigate to={`/stripe-checkout/`} replace={true}></Navigate>
      )}

      {status === 'loading' ? (
        <Grid
          height="80"
          width="80"
          color="rgb(79, 70, 229) "
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {/* This form is for address */}
            <form
              className="bg-white px-5 py-12 mt-12"
              noValidate
              onSubmit={handleSubmit((data) => {
                console.log(data);
                dispatch(
                  updateUserAsync({
                    ...user,
                    addresses: [...user.addresses, data],
                  })
                );
                reset();
              })}
            >
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Full name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('name', {
                            required: 'name is required',
                          })}
                          id="name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.name && (
                          <p className="text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          {...register('email', {
                            required: 'email is required',
                          })}
                          type="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.email && (
                          <p className="text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone"
                          {...register('phone', {
                            required: 'phone is required',
                          })}
                          type="tel"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.phone && (
                          <p className="text-red-500">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('street', {
                            required: 'street is required',
                          })}
                          id="street"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.street && (
                          <p className="text-red-500">
                            {errors.street.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('city', {
                            required: 'city is required',
                          })}
                          id="city"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.city && (
                          <p className="text-red-500">{errors.city.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('state', {
                            required: 'state is required',
                          })}
                          id="state"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.state && (
                          <p className="text-red-500">{errors.state.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="pinCode"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('pinCode', {
                            required: 'pinCode is required',
                          })}
                          id="pinCode"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.pinCode && (
                          <p className="text-red-500">
                            {errors.pinCode.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    // onClick={e=>reset()}
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Address
                  </button>
                </div>
              </div>
            </form>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Addresses
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Choose from Existing addresses
              </p>
              <ul>
                {user.addresses.map((address, index) => (
                  <li
                    key={index}
                    className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                  >
                    <div className="flex gap-x-4">
                      <input
                        onChange={handleAddress}
                        name="address"
                        type="radio"
                        value={index}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {address.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {address.street}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {address.pinCode}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        Phone: {address.phone}
                      </p>
                      <p className="text-sm leading-6 text-gray-500">
                        {address.city}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Payment Methods
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Choose One
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="cash"
                        name="payments"
                        onChange={handlePayment}
                        value="cash"
                        type="radio"
                        checked={paymentMethod === 'cash'}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="cash"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Cash
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="card"
                        onChange={handlePayment}
                        name="payments"
                        checked={paymentMethod === 'card'}
                        value="card"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="card"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Card Payment
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="mx-auto mt-12 bg-white max-w-7xl px-2 sm:px-2 lg:px-4">
              <div className="border-t border-gray-200 px-0 py-6 sm:px-0">
                <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
                  Cart
                </h1>
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.product.thumbnail}
                            alt={item.product.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={item.product.id}>
                                  {item.product.title}
                                </a>
                              </h3>
                              <p className="ml-4">
                                ${item.product.discountPrice}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.product.brand}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-gray-500">
                              <label
                                htmlFor="quantity"
                                className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                              >
                                Qty
                              </label>
                              <select
                                onChange={(e) => handleQuantity(e, item)}
                                value={item.quantity}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>

                            <div className="flex">
                              <button
                                onClick={(e) => handleRemove(e, item.id)}
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
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

              <div className="border-t border-gray-200 px-2 py-6 sm:px-2">
                <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>$ {totalAmount}</p>
                </div>
                <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                  <p>Total Items in Cart</p>
                  <p>{totalItems} items</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <div
                    onClick={handleOrder}
                    className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Order Now
                  </div>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or
                    <Link to="/">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
}

export default Checkout;