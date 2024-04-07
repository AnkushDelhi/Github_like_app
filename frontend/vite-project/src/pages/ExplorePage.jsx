import React, { useState } from 'react'
import Spinner from '../Components/Spinner';
import Repos from '../Components/Repos';



const ExplorePage = () => {
  const [loading, setLoading]=useState(false);
  const [repos, setRepos]=useState([]);
 const  [selectedLanguage, setSelectedLanguge]=useState('');

  const exploreRepos = async (language) => {
    setLoading(true);
    // token --> for 5000 request per hour for authenticated request
  try {
    const res =await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,{
      headers:{
        Authorzation:  `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
      }
    });
    const data=await res.json();
    setRepos(data.items);

  } catch (error) {
    toast.error(error.messge);
  }finally{
    setLoading(false);
  }

  }

  return (
   <div className='px-4'>
    <div className='bg-glass max-w-2x1 mx-auto rounded-md p-4'>
      <h1 className='text-x1 font-bold text-center'>Explore Popular Repositories</h1>
      <div className='flex flex-wrap gap-2 my-2 justify-center'>
        <img src="/javascript.svg" alt="javscript" className=' cursor-pointer' 
         onClick={() => exploreRepos('javascript')}/>
        <img src="c++.svg" alt="c++"  className='cursor-pointer'
          onClick={() =>exploreRepos('c++')}/>
        <img src="html.svg" alt="html" className='cursor-pointer' 
         onClick={() =>exploreRepos('html')}/>
        
        <img src="java.svg" alt="java"  className='cursor-pointer'
         onClick={() =>exploreRepos('java')}/>
        <img src="python.svg" alt="python" className='cursor-pointer'
         onClick={() =>exploreRepos('python')} />
      </div>
      
      {repos.length > 0 && (
        <h2 className='text-lg font-semibold text-center my-4'>
          <span className='bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full'>
            {selectedLanguage.toUpperCase()} {""}
          </span>
          Repositories
        </h2>
      )}
      {!loading && repos.length > 0 && <Repos repos={repos } alwaysFullWidth/>}
      {loading && <Spinner />}
    </div>
   </div>
  )
}

export default ExplorePage