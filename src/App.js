import react, { useEffect, useState } from 'react';
import Header from "./components/Header";
import Recipes from './components/Recipes';



const App = () => {
  const [search, setSearch] = useState("");
  const [storeData, setStoreData] = useState("");

  const [recipe, setRecipe] = useState([]);

  const defaultInput= search ? search : "milk";

 

  const getRecipes = async () => {
    const Recipe_API = 'https://api.edamam.com/search?q='+defaultInput+'&app_id=7df981b4&app_key=5c48dc850785dba37495090fc83afd45';
    const res = await fetch(Recipe_API);
    const data = await res.json();
    console.log(data.hits);
    setRecipe(data.hits);
  }

  const onClickSubmit = (e) => {
    e.preventDefault();
    setStoreData(search);
  }

  useEffect(() => {
    getRecipes();
  }, [storeData])


  return (
    <>
      <Header  value={search} onInputChange={setSearch} onClickSubmit={onClickSubmit} />
      <Recipes key={Math.random() * 100} data={recipe} />
    </>
  )
}

export default App;