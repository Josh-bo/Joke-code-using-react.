import axios from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Apifetch = () => {
  const [joke , setJoke ] = useState('')
  useEffect(()=>{
    getJoke()
  },{})

  async function getJoke(){
    let config = {
      headers : {
        Accept: 'application/json',
      }
    }
    let { data } = await axios('https://icanhazdadjoke.com', config)
    setJoke(data.joke)
  }

  return (
    <>
      <div className="container">
        <div className='row mt-5 mx-auto pt-5 w-100'>
            <div className='col-12 text-center mt-5 pt-5 border rounded border-info'>
        <h3 className="text-center text-warning">JOKES APART 😀🤣</h3>
        <div className="text-center text-light fs-5 mt-3">{joke}</div>

        <div className=''>
         <button onClick={getJoke} className="btn btn-danger my-4">Previous 🤣</button>
         <button onClick={getJoke} className="btn btn-warning mx-1 my-4">NEXT 🤣</button>
        </div>

            </div>
        </div>
      </div>
    </>
  );
}

export default Apifetch