import React from 'react'
import './Item.css'

const Item = ({details}) =>{
    return(
        <div>
            <hr className='b' />
            <div id='details'>
                <div id='img'>   <img style={{ width: 500, height: 600 }}   alt='infromation' src={details.Poster}/>   </div>
                    <div id='list'>
                    <ul className='f-1-ns ba underline bg-light-gray Item'>
                        <p>Title: {details.Title}</p>
                        <p>Type: {details.Type}</p>
                        <p>Year: {details.year}</p>
                        <p>imdbID: {details.imdbID}</p>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Item;