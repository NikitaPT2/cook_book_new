import { Link } from "react-router-dom";
import { useAPI } from "./context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./create";
import RecipeDetails from "./recipeDetails";
import { APIContextProvider } from "./context";
import RecipeList from "./list";

const Navbar = () => {
  const { setQuery } = useAPI();

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
            onChange={(e) => setQuery(e.target.value)}
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
    <APIContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </APIContextProvider>
  );
}

export default App;