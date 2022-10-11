// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { ReactComponent as CloseSvg } from '../../../assets/icons/delete.svg';
// import { Link } from 'react-router-dom';
// // import { axiosinstance } from '../../../api/api';
// import cls from './ModalForm.module.css';
// import { useSelector } from 'react-redux';

// const ModalForm = ({ showModal, totalFinalPrice, data, successHandler }) => {
//   const {
//     register,
//     formState: { errors, isValid },
//     handleSubmit,
//     reset,
//   } = useForm({
//     mode: 'all',
//   });

//   const order = {
//     product: data,
//     totalPrice: totalFinalPrice,
//   };

//   const [modal, setModal] = useState(false);
//   const userId = useSelector((state) => state.user.id);
//   const favProducts = useSelector((state) => state.favorite);
//   const cart = useSelector((state) => state.cart);

//   console.log(favProducts, 'fav');

//   console.log(userId, 'id');

//   const onSubmithandler = (data) => {
//     axiosinstance
//       .post('/orders.json', {
//         ...data,
//         order,
//         userId,
//         favProducts,
//       })
//       .then((res) => {
//         console.log(res.data, 'dsta');
//       });

//     reset();
//     setModal((prevState) => !prevState);
//     successHandler();
//   };

//   useEffect(() => {}, [errors]);

//   return (
//     <>
//       <div className={cls.layout}>
//         <form className={cls.form} onSubmit={handleSubmit(onSubmithandler)}>
//           <div className={cls.form_title}>
//             <h5 className={cls.title}>
//               Оформление заказа
//               <CloseSvg style={{ width: 24 }} onClick={showModal} />
//             </h5>
//           </div>
//           <section className={cls.form_section}>
//             <>
//               <label
//                 className={cls.label}
//                 style={
//                   errors.username ? { color: 'red' } : { color: '#d0d0d0' }
//                 }
//               >
//                 Ваше имя
//               </label>
//               <input
//                 className={cls.input}
//                 style={
//                   errors.username
//                     ? { border: '1px solid red' }
//                     : { border: '1px solid #e7e7e7' }
//                 }
//                 placeholder="Например Иван"
//                 {...register('username', {
//                   required: true,
//                 })}
//               />
//             </>
//             <>
//               <label
//                 className={cls.label}
//                 style={errors.surname ? { color: 'red' } : { color: '#d0d0d0' }}
//               >
//                 Ваше фамилия
//               </label>
//               <input
//                 className={cls.input}
//                 style={
//                   errors.surname
//                     ? { border: '1px solid red' }
//                     : { border: '1px solid #e7e7e7' }
//                 }
//                 placeholder="Например Иванов"
//                 {...register('surname', {
//                   required: true,
//                 })}
//               />
//             </>

//             <>
//               <label
//                 className={cls.label}
//                 style={errors.email ? { color: 'red' } : { color: '#d0d0d0' }}
//                 htmlFor="Электронная почта"
//               >
//                 Электронная почта
//               </label>
//               <input
//                 className={cls.input}
//                 style={
//                   errors.email
//                     ? { border: '1px solid red' }
//                     : { border: '1px solid #e7e7e7' }
//                 }
//                 placeholder="example@mail.com"
//                 {...register('email', {
//                   required: true,
//                   pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
//                 })}
//               />
//             </>

//             <>
//               <label
//                 className={cls.label}
//                 style={errors.number ? { color: 'red' } : { color: '#d0d0d0' }}
//               >
//                 Ваш номер телефона
//               </label>
//               <input
//                 className={cls.input}
//                 style={
//                   errors.number
//                     ? { border: '1px solid red' }
//                     : { border: '1px solid #e7e7e7' }
//                 }
//                 type="tel"
//                 placeholder="Введите номер телефона"
//                 {...register('number', {
//                   required: true,
//                   minLength: 5,
//                 })}
//               />
//             </>

//             <>
//               <label
//                 className={cls.label}
//                 style={errors.country ? { color: 'red' } : { color: '#d0d0d0' }}
//               >
//                 Страна
//               </label>
//               <input
//                 className={cls.input}
//                 style={
//                   errors.country
//                     ? { border: '1px solid red' }
//                     : { border: '1px solid #e7e7e7' }
//                 }
//                 placeholder="Введите страну"
//                 {...register('country', {
//                   required: true,
//                 })}
//               />
//             </>

//             <>
//               <label
//                 className={cls.label}
//                 style={errors.city ? { color: 'red' } : { color: '#d0d0d0' }}
//               >
//                 Город
//               </label>
//               <input
//                 className={cls.input}
//                 style={
//                   errors.city
//                     ? { border: '1px solid red' }
//                     : { border: '1px solid #e7e7e7' }
//                 }
//                 placeholder="Введите город"
//                 {...register('city', {
//                   required: true,
//                 })}
//               />
//             </>

//             <div className={cls.form_checked}>
//               <input
//                 style={{ marginRight: 8 }}
//                 type="checkbox"
//                 {...register('checkbox', {
//                   required: true,
//                 })}
//               />
//               <span className={cls.offerta_text}>
//                 Согласен с условиями
//                 <Link to="/offert"> публичной оферты</Link>
//               </span>
//             </div>
//           </section>

//           <input
//             className={cls.form_submit}
//             type="submit"
//             disabled={!isValid}
//             onSubmit={onSubmithandler}
//           />
//         </form>
//       </div>
//     </>
//   );
// };

// export default ModalForm;
