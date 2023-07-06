import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        // console.log( target.value );
        // setInputValue('Hola Mundo');
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        // console.log(event);
        event.preventDefault();        
        // console.log(inputValue);
        if( inputValue.trim().length <= 1 ) return;

        // setCategories( categories => [ inputValue, ...categories ]);        
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        /*<div>AddCategory</div>*/
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
                //onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}