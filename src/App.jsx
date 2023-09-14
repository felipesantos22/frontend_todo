import { useEffect, useState } from 'react'
import './App.css'
import Formulario from './components/form'
import Table from './components/table'
import axios from 'axios';

function App() {

  const [api, setApi] = useState([])
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const obj = {
    name,
    status,
  }

  //Create
  const create = async () => {
    await axios.post(`http://localhost:8080/task`, obj)
      .then((response) => {
        setApi(users => [...api, response.data]);
      });
  };

  //Read
  const read = async () => {
    await axios.get(`http://localhost:8080/task`)
      .then((response) => {
        setApi(response.data);
      });
  };

  useEffect(() => {
    read();
  }, []);

  //Update
  const update = async (id) => {
    console.log("update");
    await axios.put(`http://localhost:8080/task/${id}`, obj)
      .then(response => response.data)
  };

  const deleted = async (id) => {
    await axios.delete(`http://localhost:8080/task/${id}`)
      .then(() => {
        setApi(response => response.filter(tasks => tasks.id !== id))
      })
  }

  return (
    <>
      <Formulario setName={setName} setStatus={setStatus} create={create} />
      <Table api={api} update={update} deleted={deleted} />
    </>
  )
}

export default App
