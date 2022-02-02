import React, { useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MoiveRow/MovieRow'; 
import FeaturedMovie from './components/FeaturedMovies.js/FeaturedMovie';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
 
// eslint-disable-next-line import/no-anonymous-default-export
export default  () => {

  const [movieList, setMovieList] = useState ([]);
  const [featuredData, setFeaturedData] = useState ([]);
  const [blackHeader, setBlackHeader] = useState (false);


  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll()
  }, []);

  useEffect(() => {
    const scrollListner = () => {
        if(window.scrollY > 10){
          setBlackHeader(true);
        } else {
          setBlackHeader(false);
        }
    }
    window.addEventListener('scroll', scrollListner);

    return() => {
      window.removeEventListener('scroll', scrollListner);
    }
  }, []);

  return(
    <div className="page">

      <Header black={blackHeader} />

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }
    

      <section className="lists">
        {movieList.map((item, key)=> (
          <MovieRow 
            key={key}
            title={item.title}
            items={item.items}
          />
        ))}
      </section>

      <Footer />

    
      
    </div>
  )
}