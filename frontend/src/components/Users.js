import React from "react";
import axios from "axios";

const Users = ({ data }) => {

  //! DATABASE'DEN VERİ SİLME
  const del = (id)=> {
    
    axios.delete(`http://localhost:5000/users/${id}`)
    .then((response) => console.log(response))
    .catch((error)=> console.log(error))
  }

  return (
    <div className=" w-full flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5 px-5 overflow-auto">
      {data.map((user) => {
        return (
          <div
            className=" w-full bg-purple-600 rounded-xl flex flex-row gap-5 md:gap-10 justify-center items-center h-20"
            key={user._id}
          >
            <div>
              <h1>isim: {user.name}</h1>
              <h1>şehir: {user.city}</h1>
            </div>

            <div>
              <button className=" bg-red-600 rounded-lg p-2" onClick={()=> {del(user._id)}}>
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
