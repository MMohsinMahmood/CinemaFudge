import './App.css';
import Row from './Components/row';
import requests from './Components/requests';
import Banner from './Components/Banner';
import Nav from './Components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLarge={true} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchURL={requests.fetchDocumentries} />


    </div>
  );
}

export default App;
