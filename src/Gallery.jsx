import React, { useState } from 'react';
import picturePaths from './PicturePaths'; // import the array directly

function Gallery() {
    const [pictureSearch, setPictureSearch] = useState('');
    const [pictures, setPictures] = useState(picturePaths);
    const [categories, setCategories] = useState([...new Set(picturePaths.map(picture => picture.category))]);

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setPictureSearch(searchTerm);

        const updatedPictures = picturePaths.filter(picture => 
            picture.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setPictures(updatedPictures);
    };

    const handleCategoryClick = (e) => {
        const selectedCategory = e.target.innerText;
        const updatedPictures = picturePaths.filter(picture => 
            picture.category === selectedCategory
        );
        setPictures(updatedPictures);
    };

    return (
        <>
            <div>
            <div className='main-head'>
                <div className='header'>
                    <h1>Gallery</h1>
                    <input
                        type="text"
                        placeholder='Search for picture...'
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='main-body'>
            <div className='category'>
                    <button className='category-button' onClick={() => setPictures(picturePaths)}>
                        All
                    </button>
                    {categories.map((category, index) =>
                    <button key = {index} className='category-button' onClick={handleCategoryClick}>
                    {category}
                </button>)}
                </div>

                <div className='picture-section'>
                        {pictures.map((picture, index) => (
                             <span key={index} className='picture'>
                             <img className='picture-content' src={picture.path} alt={picture.title} />
                             <p className='picture-title'>{picture.title}</p>
                         </span>   
                        ))}
                </div>
            </div>
                
            </div>
            
            
        </>
    );
}

export default Gallery;
