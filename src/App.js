import './App.css';
import { listItems } from './components/ListDemo.js'
import MovieList from './components/ListDemo.js';
import DynamicMovieList from './components/dynamicListsDemo/DynamicMoviesList';

function App() {
  return (
    <div className="App">
    <h1>Hi</h1>
    {/* <ul>
      {listItems}
      <MovieList/>
    </ul> */}
    <DynamicMovieList />
    </div>
  );
}

export default App;
