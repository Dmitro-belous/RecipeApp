import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Recipe.css"


const Recipe = () => {
    const {id} = useParams();
    const Navigate = useNavigate();
    const [Reciept, setReciept] = useState(null);
    const back = () => Navigate(-1);

    useEffect(()=> {
        fetch(`http://127.0.0.1:8000/recipes/${id}`)
        .then(response => response.json())
        .then(data => setReciept(data))          
}, [id]);
    
    return(
        <div>
           {Reciept &&(
            <>
            <h1>{Reciept.title}</h1>
            <i>Категория: {Reciept.category.name}</i>
            <p>Описание: {Reciept.text}</p>
            </>
           )}
           <Link className="linkRes" onClick={ back }> Вернуться к списку рецептов </Link>
        </div>
    )
}

export default Recipe;