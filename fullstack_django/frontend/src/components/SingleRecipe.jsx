import * as React from "react";
import { Link } from "react-router-dom";

function SingleRecipe(props) {

    return (
        <tr>
            <td>{props.recipe.title}</td>
            <td><Link key={props.recipe.id} to={`/recipes/${props.recipe.id}` }>Читать рецепт полностью</Link></td>
        </tr>
    );
}

export default SingleRecipe;
