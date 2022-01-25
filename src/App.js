import React, { useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';

 
// eslint-disable-next-line import/no-anonymous-default-export
export default  () => {

  const [movieList, setMovieList] = useState ([]);


  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)
     }

    loadAll()
  }, []);

  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=> (
          <div>
            {item.slug}
            {item.title}
          </div>
        ))}
      </section>
      
    </div>
  )
}