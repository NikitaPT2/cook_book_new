import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./create";
import RecipeDetails from "./recipeDetails";
import RecipeList from "./list";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useDispatch } from "react-redux";
import { setQuery } from "./redux/querySlice";
// import { APIContextProvider } from "./context";
// import { useAPI } from "./context";

const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <div className="links">
      <nav className="navbar">
        <div className="Logo">
          <Link to="/">Cook Book</Link>
        </div>
        <div className="search-container">
          <label>Search: </label>
          <input
            className="SearchR"
            onChange={(e) => dispatch(setQuery(e.target.value))}
          />
        </div>
        <div className="create-link">
          <Link to="/create">create recipe</Link>
        </div>
      </nav>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <RecipeList title="Recipes" />
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;