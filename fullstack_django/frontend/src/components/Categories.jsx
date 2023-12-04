import { useState, useEffect } from "react";

import Table from 'react-bootstrap/Table';

import "../styles/Categories.css";
import Category from "./Category";

const Categories = () => {
    
    const [listOfCategory, setListOfCategory] = useState([]);
    
    useEffect(()=> {
            fetch(`http://127.0.0.1:8000/categories/`)
            .then(response => response.json())
            .then(data => setListOfCategory(data))         
    }, []); 

    return (
        <div>
            <h3>категории</h3>
            <Table striped bordered hover className="categories">
                <thead>{listOfCategory.length === 0 ? <tr><td>Loading...</td></tr> : <tr><th>Название</th><th></th></tr>}</thead>
                <tbody>
                    {listOfCategory.map(category => <Category key={category.id} category={category}/>)}
                </tbody>
            </Table>
        </div>
    );       
}     
    

export default Categories

