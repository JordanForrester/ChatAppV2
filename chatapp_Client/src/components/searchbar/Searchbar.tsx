import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Searchbar(){
    const [searchString, setSearchString] = useState('');

    return(<>
    
    <div className='uk-inline uk-card uk-card-defaultuk-width-2'>
    
    
        
        <form>
            <input className='uk-input' type='text'></input>
        </form>
        <div className='uk-display-inline uk-position-center-right-out uk-position-medium'>
        
            <span id='search' className="uk-icon-button">
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </span>
            
            
            
        
             
        </div>
        

    
    
        
    </div>
    </>);

}