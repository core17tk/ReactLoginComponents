import React from 'react';
// import HeaderImage from '../assets/hwallpaper.pn'

const Login = () => {
  return (
  	<div className={style.container}>
  		<div className={style.imageContainer}>
  		 <img className={style.image} src={HeaderImage} alt='image' />
  	    </div>

  	    <div className={style.formContainer}>
  	      <form className={style.form}>
  	    	<h2 className={style.title}>Brand Name</h2>

  	    	<div className={style.inputsContainer}> 
  	    		<label>UserName</label>
  	    		<input className={style.input} type='text' />
  	    	</div>

  	    	<div className={style.inputsContainer}> 
  	    	  	<label>password</label>
  	    		<input className={style.input} type='password' />
  	    	</div>

  	    	<button className={style.button}> Login </button>

  	    	<div className='flex justify-between'>
  	    		<p className='flex items-center'><input className='mr-2' type='checkbox' /> Remember Me</p>
  	    		<p>Create an account</p>
  	    	 </div>

    
  	      </form>
  	     </div>
  		
  	</div>
  );
};

export default Login;



const style = {
  container: `grid grid-cols-1 sm:grid-cols-2 h-screen w-full`,
  imageContainer:`hidden sm:block`,
  image:`w-full h-full object-cover`,
  formContainer:`bg-gray-100 flex flex-col justify-center`,
  form:`max-w-[400px] w-full mx-auto bg-white p-4`,
  title:`text-4xl font-bold text-center py-6`,
  inputsContainer:`flex flex-col py-2`,
  input:`border p-2`,
  button:`border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-400 text-white`,
}