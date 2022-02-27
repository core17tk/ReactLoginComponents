import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import {AifillFacebook} from 'react-icons/ai'


const style = {
	container:`relative w-full h-screen bg-zinc-900/90`,
	wallpaper:`absolute w-full h-full object-cover mix-blend-overlay`,
	formContainer:`flex justify-center items-center h-full`,
	form:`max-w-[400px] w-full mx-auto bg-white p-8 rounded-lg`,
	title:`text-4xl font-bold text-center py-8`,
	iconsWrapper:`flex justify-between py-8`,
	iconStyle:`border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center`,
}

const wallpaper = 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'


const Login2 = () => {
  return (
  	<div className={style.container}>
  	  <img className={style.wallpaper} src={wallpaper}/>

  	  <div className={style.formContainer}>
  	  	<form className={style.form}>
  	  	  <h2 className={style.title}>Brand Name</h2>

  	  	     <div className={style.iconsWrapper}>
  	  	      <p> <AifillFacebook className={style.iconStyle}/> Facebook</p>
  	  	      <p> <FcGoogle className={style.iconStyle}/> google</p>
  	  	     </div>

  	  	     <div>
  	  	     	<label>UserName</label>
  	  	     	<input type='text' />
  	  	     </div>
  	  	      <div>
  	  	     	<label>Password</label>
  	  	     	<input type='password' />
  	  	     </div>
  	  	     <button>Login</button>
  	  	     <p> <input type='checkbox' /> Remember me </p>
  	  	     <p>Not a member? Sign up now</p>
  	  	</form>
  	  </div>

  	</div>
  );
};

export default Login2;