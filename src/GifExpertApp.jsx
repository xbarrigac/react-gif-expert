import { useState } from "react"
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCAtegory = ( newCategory ) => {
        // console.log('Barcelona');
        // console.log(newCategory);
        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, 'Barcelona' ] );

    }

    // console.log(categories);


    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ (value) => onAddCAtegory(value) }                
            />

            {/* Listado de Gif */}
            {/*<button onClick={ onAddCAtegory }>Agregar</button>*/}
            {/*<ol>*/}
                { categories.map( ( category ) => ( //{
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                    /*
                    // return ( //<li key={ category }>{ category }</li>
                        <div key={ category }>
                            <h3>{ category }</h3>
                            <li>{ category }</li>
                        </div>
                    ) //}
                    */
                )) 
                }
                {/*<li>ABC</li>*/}
            {/*</ol>*/}
                {/* Gif Item */}
        </>
    )
}