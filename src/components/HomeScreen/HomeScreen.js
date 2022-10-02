import React from 'react'
import Nav from '../Nav/Nav'
import Banner from '../Banner/Banner'
import requests from '../../Request'
import Row from '../Row/Row'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
    <Nav/>
    
    <Banner/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTrending}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Horroe Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  )
}

export default HomeScreen
