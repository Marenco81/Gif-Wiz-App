import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifWizApp = () => {

    const [ categories, setCategories ] = useState(['Dragon Ball'])

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
        
        {
        categories.map( category => {
            return (
              <GifGrid 
              key={category} 
              category={category}
              />
            )
        })
        }
    </>
  )
}
