import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import Layout from './components/Layout';

class App extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/"element={<Layout/>}>
                        <Route index element={<Categories/>}></Route>
                        <Route path="categories/:id" element={<Recipes/>}></Route>
                        <Route path="recipes/:id" element={<Recipe/>}></Route>
                    </Route>
                </Routes>
            </div>    
        ) 
    }
}

export default App;
