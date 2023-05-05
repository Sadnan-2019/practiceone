import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
// import { } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = event =>{
    event.preventDefault();
    
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = {name,email};
    console.log(name,email)
    ////post data

  //   fetch("http://localhost:5000/user",{

  //     method: "POST",
  //     headers:{
  //       "Content-Type": "application/json",
  //     },
  //     body:JSON.stringify(user),
  //   })
  //   .then(res =>res.json())
  //   .then(data =>{
  //     console.log(data)
  //   })
  // }
  fetch("http://localhost:5000/user", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(user),
  })
  .then((response) => response.json())
  .then((data) => {
  
    
    console.log(data);
  })
  
  
  
  
    }
  return (
    <div className="">
      <h1>My own data{users.length}</h1>

     <div className=" ">
     <div className="  shadow-xl   ">
        
         < div className=" grid bg-red-200   grid-cols-3 mx-10    " >

         {users.map((user) => (
               <div className=" mx-10 " key={user.id}>
              <h2 className="card-title">{user.id}</h2>
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
            

          ))} 
         </div>
         <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Practice</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                 
                  
                type="text"
                name="name"
                placeholder="your name"
                className="input input-bordered w-full max-w-xs"
              />
               
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                 
                  
                type="email"
                name="email"
                placeholder="your email"
                className="input input-bordered w-full max-w-xs"
              />
               
            </div>
            <div className="py-2">
            <input value="Add" className="btn btn-sm" type="submit"/>

            </div>
          </form>
          

           
        </div>
      </div>
    </div>
      </div>
     </div>

 

    </div>
  );
}

export default App;
