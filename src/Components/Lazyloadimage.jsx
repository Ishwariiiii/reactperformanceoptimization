import React, { useEffect, useRef } from 'react';
import photo from "../Assets/photo.jpg"

const Lazyloadimage = ({ src, alt }) => {
    const imageRef = useRef();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }
        
        

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                imageRef.current.src = photo;
                imageRef.current.alt = alt;
            }
        });
    };

    return <img src={photo} ref={imageRef} style={{ height: '200px' }} alt="image" />;
};

export default Lazyloadimage;