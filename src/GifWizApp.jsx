import { useState } from "react";

export const GifWizApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball'])

  return (
    <>
        {/* titulo */}
      <h1>GifWizApp</h1>


        {/* imput */}


        {/* listado de Gifs */}
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
