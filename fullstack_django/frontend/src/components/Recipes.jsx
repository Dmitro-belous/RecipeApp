import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import SingleRecipe from './SingleRecipe';
import "../styles/Recipes.css"

const Recipes = () => {
    const {id} = useParams();
    const Navigate = useNavigate();
    const [Category, setCategory] = useState([]);
    const back = () => Navigate(-1);


    useEffect(()=> {
            fetch(`http://127.0.0.1:8000/categories/${id}`)
            .then(response => response.json())
            .then(data => setCategory(data))          
    }, [id]); 

            return (
                <div>
                    <h3> категория "{Category.name}" </h3>
                    <Table striped bordered hover className="categories">
                        <thead>{Category.recipe?.length === 0 ? <tr><td>Loading...</td></tr> : <tr><th>Название рецепта</th><th></th></tr>}</thead>
                        <tbody>
                            {Category.recipe?.map(recipe => <SingleRecipe key={recipe.id} recipe={recipe}/>)}
                        </tbody>
                    </Table>
                    <Link className="linkCat" onClick={ back }> Вернуться к списку категорий </Link> 
                </div>
        );          
}     
    

export default Recipes;