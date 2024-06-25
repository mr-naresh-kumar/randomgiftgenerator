
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';



const API_KEY= "zcOFlAdtATV6wWQQkJVU0NO8BsP6DXWQ";


const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;



const useGif = (tag) => {
    const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  
 

async function fetchData(tag){
  setLoading(true);
 
 const {data} = await  axios.get(tag ? `${url}&tag=${tag}` :  url);
 const imageSourse = data.data.images.downsized_large.url;
 setGif(imageSourse);
 setLoading(false);
 
  
}


// useEffect( () => {
//   fetchData();
// },[] )



useEffect(() =>{
  fetchData('car');
},[] )



return{
    gif, loading, fetchData
};
}


 

 export default useGif;
