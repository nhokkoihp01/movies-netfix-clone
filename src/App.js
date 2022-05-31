import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from "./components/Intro/Intro";
import Menu from "./components/menu/Menu";
import Content from "./components/content/Content";
import MovieDetail from "./components/movie_detail/MovieDetail";
import MovieDetailAntd from "./components/movie_detail/MovieDetailAntd";
import MovieReactModal from "./components/movie_detail/MovieReactModal";
import {useSelector} from "react-redux";
import SearchMovies from "./components/search_movies/SearchMovies";
import Home from "./components/page/Home";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Search from './components/page/Search';


function App() {
    // let {DetailMovie} = useSelector(state => state.infoMovies)
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/search' element={<Search/>}/>
                </Routes>
            </BrowserRouter>

            {/*<Navbar/>*/}
            {/*<Home/>*/}
            {/*<MovieDetailAntd/>*/}
            {/*<MovieReactModal movie={DetailMovie}/>*/}
            {/*<SearchMovies/>*/}


        </div>
    );
}

export default App;

