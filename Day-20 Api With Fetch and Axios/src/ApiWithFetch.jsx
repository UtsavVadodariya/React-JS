import React, { useEffect, useState } from 'react';

export default function ApiWithFetch() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetchApi();
    }, []);
    
    const fetchApi = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const res = await response.json();
        setData(res);
    };

    return (
        <div className="api-container">
            <h1>Our Products</h1>
            <div className="product-grid">
                {data && data.map((e, i) => (
                    <div className="product-card" key={i}>
                        <div className="product-image-container">
                            <img className="product-image" src={e.image} alt={e.title} />
                        </div>
                        <div className="product-info">
                            <h2 className="product-title">{e.title}</h2>
                            <p className="product-price">${e.price}</p>
                            <p className="product-description">{e.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
