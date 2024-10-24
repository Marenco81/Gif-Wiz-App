import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifWizApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory) => {
        setCategories([ newCategory, ...categories]);
    }
  return (
    <>
        {/* titulo */}
      <h1>GifWizApp</h1>


        {/* imput */}
        <AddCategory
        //  setCategories={setCategories} 
            onNewCategory={event => onAddCategory(event)}
         />

        {/* listado de Gifs */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
        <ol>
            {
            categories.map( category => {
                return <li key={category}>{category}</li>
            })
            }
            {/* <li>ABC</li> */}
        </ol>

            {/* Gif items */}
    </>
  )
}
