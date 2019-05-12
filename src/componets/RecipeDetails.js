import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: recipe,
      url: `https://www.food2fork.com/api/get?key=e8bbdfab98f269128b08763dd9fd1e04&rId=${
        this.props.id
      }`
    };
  }
  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn btn-warning mb-5 text-uppercase"
              >
                back to recipe list
              </button>
              <img src={image_url} className="d-block w-100" alt="recipe" />
            </div>
            {/* details */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-uppercase text-warning text-slanted">
                provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                target="_blank"
                className="btn btn-primary mt-2 text-capitalize"
                rel="noopener noreferrer"
              >
                {" "}
                publisher webpage
              </a>

              <a
                href={source_url}
                target="_blank"
                className="btn btn-success mt-2 mx-3 text-capitalize"
                rel="noopener noreferrer"
              >
                recipe url{" "}
              </a>

              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">ingredients</h2>
                {ingredients.map((item, index) => {
                  return (
                    <li className="list-group-item text-slanted">{title} </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
