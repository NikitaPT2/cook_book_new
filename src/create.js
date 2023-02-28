import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
//import { useAPI } from "./context";

const Create = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [method, setMethod] = useState("");
  const [time, setTime] = useState("");
  const [listIngredients, setListIngredients] = useState([]);
  const isPending = useSelector((state) => state.pending)

  const nav = useNavigate()

    const handleIngredients = (e) => {
        e.preventDefault()
        setListIngredients([...listIngredients, ingredients])
        setIngredients('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3000/recipes", {
                title,
                listIngredients,
                method,
                time,
            })
            nav('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="create">
      <h2>Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Recipe title:</label>
        <input
          className="ingred"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Recipe ingredients:</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button type="button" onClick={handleIngredients}>
          add
        </button>
        <p>Current ingredients: { listIngredients.toString() }</p>
        <label>Recipe method:</label>
        <textarea
          className="ingred"
          required
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />
        <label>Cooking time (in minutes):</label>
        <input
          className="ingred"
          type="number"
          min="0"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        {!isPending && <button type="submit">submit</button>}
        {isPending && <button disabled>submiting...</button>}
      </form>
    </div>
  );
};

export default Create;