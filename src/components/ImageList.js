import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return (
            <img key={image.id} className="ui centered large image" src={image.webformatURL} alt="display request" />
        )
    })


    return (

        <div className="ui container">
            {images}
        </div>


    )
};

export default ImageList;