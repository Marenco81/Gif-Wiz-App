import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

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
