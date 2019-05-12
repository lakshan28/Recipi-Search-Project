import React,{Component} from 'react';
import { recipes } from './tempList';
import RecipeList from './componets/RecipeList';
import RecipeDetails from './componets/RecipeDetails';

import './App.css';

class App extends Component {
  
  state = {
    recipes: recipes,
    url:"https://www.food2fork.com/api/search?key=e8bbdfab98f269128b08763dd9fd1e04",
    details_id:35382,
  };

 /* async getRecipes() {
  
    try {

      const data= await fetch(this.state.url);
      const jsonData = await data.json();
  
      this.setState({
        recipes:jsonData.recipes
      })
    }
    catch(error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getRecipes()
  } */

render () {

  console.log(this.state.recipes);

  return (
    <React.Fragment>
      <RecipeList recipes={this.state.recipes}/>
      <RecipeDetails id={this.state.details_id} />
    </React.Fragment>
  );
}

}

export default App;
