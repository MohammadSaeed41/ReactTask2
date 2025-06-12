import React, { useRef, useState } from 'react'

export default function App() {

  const [user,setUser] = useState({
    name:'',
    email:'',
    password:''
  });

  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(user);
  }

  const handleChange = (e)=>{
    const {name,value} = e.target;
    console.log(name,value);
    setUser({
      ...user,
      [name]:value
    });
  }
/*
  const handleChange = (e)=>{
    setUser({name:e.target.value,email:user.email,password:user.password});
  }

  const handleChangeEmail = (e)=>{
    setUser({name:user.name,email:e.target.value,password:user.password});
  }
    const handleChangePassword = (e)=>{
    setUser({name:user.name,email:user.email,password:e.target.value});
  }
*/
  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <label className="form-label">User Name</label>
              <input name='name' value={user.name} onChange={handleChange} type="text" className="form-control" />
          </div>

          <div className="mb-3">
              <label className="form-label">User Email</label>
              <input name='email' value={user.email} onChange={handleChange} type="email" className="form-control" />
          </div>

          <div className="mb-3">
              <label className="form-label">User Password</label>
              <input name='password' value={user.password} onChange={handleChange} type="password" className="form-control" />
          </div>

          <button  type='submit' className='btn btn-outline-primary'>Register</button>
      </form>

    </>
  )
}
