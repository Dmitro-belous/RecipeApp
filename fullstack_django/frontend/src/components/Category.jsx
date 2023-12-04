import * as React from "react";
import { Link } from "react-router-dom";

function Category(props) {

    return (
        <tr>
            <td>{props.category.name}</td>
            <td><Link key={props.category.id} to={`/categories/${props.category.id}` }>Перейти на категорию</Link></td>
        </tr>
    );
}

export default Category;