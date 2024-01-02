import React, { useEffect, useState } from 'react';
import "./Home.css";
import ImageSlide from './ImageSlide';
import Products from './Products';
import Contact from './Contact';
import Loading from './Loading';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 500);
    }, []);

    return (
        <>
            {isLoading ? <Loading /> : (
                <div className='home'>
                    <div><ImageSlide /></div>
                    <div><Products /></div>
                    <div><Contact /></div>
                </div>
            )}
        </>
    );
}
