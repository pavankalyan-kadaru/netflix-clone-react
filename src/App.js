
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Lastcomp from './components/Lastcomp';
import Navbar from './components/Navbar';
import Rows from './components/Rows';
import fetchurls from './urls';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
     
      <Rows title=" Movies now Playing" fetchinfo ={fetchurls.now_playing} largeposter />
      <Rows title="Trending" fetchinfo={fetchurls.trending} />
      <Rows title="Upcoming"  fetchinfo={fetchurls.upcoming}  />
      <Rows title="Top Rated"  fetchinfo={fetchurls.top_rated}  />
      <Rows title="Popular"  fetchinfo={fetchurls.popular}  />
      {/* <Rows title="Tv series"  fetchinfo={fetchurls.tvseries}  /> */}
      {/* <Rows title="Popular"  fetchinfo={fetchurls.popular}  /> */}
      <About/>
      <Lastcomp/>

      </div>
  );
}

export default App;
