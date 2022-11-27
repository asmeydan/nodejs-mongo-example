import React from "react";

const Input = ({ handle, name, setName, city, setCity}) => {

  


  return (
    <form className="  flex flex-1 flex-col justify-center items-center gap-8 ">
      <label htmlFor="name" className="flex gap-4">
        <p>Ad Soyad: </p>
        <input id="name" type="text" className=" border-2 border-gray-600" value={name} onChange={(e)=> setName(e.target.value)}></input>
      </label>
      <label htmlFor="city" className="flex gap-4">
        <p>Şehir: </p>
        <input id="city" type="text" className=" border-2 border-gray-600" value={city} onChange={(e)=> setCity(e.target.value)}></input>
      </label>
      <div>
        <button onClick={()=>handle()} className=" w-20 h-10 border-2 border-white bg-fuchsia-800 rounded-lg text-white hover:bg-white hover:text-fuchsia-800 hover:border-fuchsia-800 text-lg font-bold">
          gönder
        </button>
      </div>
    </form>
  );
};

export default Input;
