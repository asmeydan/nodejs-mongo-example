import { useEffect, useState } from 'react';
import Input from './components/Input';
import Users from './components/Users';
import axios from 'axios'

function App() {
  
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  
  //! DATABASE'DEN VERİ ÇEKME
  useEffect(()=> {
    const fetchData = async ()=> {
      const response = await axios.get("http://localhost:5000/users");
      setData(response.data)
      console.log(response.data)
    }

    fetchData()
  },[])


  //! DATABASE'E VERİ EKLEME
  const handle = ()=> {
    
    axios.post('http://localhost:5000/users', {
      "name": `${name}`,
      "city": `${city}`
    })
    .then((res)=> {
      console.log(res)
    })
    .catch((err)=> {
      console.log(err)
    })
  }
  
  return (
    <div className="App h-screen w-screen flex flex-col justify-center items-center">
      <Input handle={handle} name={name} setName={setName} city={city} setCity={setCity} />
      <Users data={data} />
    </div>
  );
}

export default App;
