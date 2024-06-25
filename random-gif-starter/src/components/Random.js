// import axios from 'axios';
// import React, {  useState } from 'react'
// import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


// const API_KEY= "zcOFlAdtATV6wWQQkJVU0NO8BsP6DXWQ";

const Random = () => {

//   const [gif, setGif] = useState("");
//   const [loading, setLoading] = useState(false);
 

// async function fetchData(){
//   setLoading(true);
//   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  
 
//  const {data} = await  axios.get(url);
//  const imageSourse = data.data.images.downsized_large.url;
//  setGif(imageSourse);
//  setLoading(false);
 
  
// }


// useEffect( () => {
//   fetchData();
// }, [] )


const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-1/2  bg-cyan-500 rounded-lg border border-black 
     flex flex-col items-center gap-y-5 mt-[15px] '>

    <h1 className=' mt-[15px]text-2xl underline uppercase font-bold'> A Random Gif </h1>


{
  loading ? (<Spinner/>):(<img src={gif} alt="" width="450"  />)
}



    

    
    <button onClick={()=> fetchData()} className='w-10/12 bg-slate-300 text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Random;







// https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;