import React, { useState } from 'react';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const products = [
        {
            img: './102.jpeg',
            title: 'acerpure 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '1 Year Warranty',
            ],
            price: '₹29,999',
        },
        {
            img: './103.jpeg',
            title: 'Mi by Xiaomi X Series 138 cm (55 inch) Ultra HD (4K) LED Smart Google TV 2024',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹49,999',

        },
        {
            img: './104.jpeg',
            title: 'Mi by Xiaomi X Pro QLED 138 cm (55 inch) QLED Ultra HD (4K) Smart Google TV 4K',
            specs: [
                ' Operating System: Google TV',

                'Ultra HD (4K) 3840 x 2160 Pixels',

                'Launch Year: 2024',

                ' 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹35,999',

        },
        {
            img: './105.jpeg',
            title: 'Mi by Xiaomi X Series 138 cm (55 inch) Ultra HD (4K) LED Smart Google TV 2024',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹36,999',

        },



        {
            img: './106.jpeg',
            title: 'Acer Super Series 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV ',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹72,999',

        }, {
            img: './107.jpeg',
            title: 'Vu 139 cm (55 inch) Ultra HD (4K) LED Smart Google TV',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹35,999',

        }, {
            img: './108.jpeg',
            title: 'realme TechLife CineSonic Q 140 cm (55 inch) QLED Ultra HD (4K) Smart Google TV',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹29,999',

        }, {
            img: './109.jpeg',
            title: 'realme TechLife CineSonic Q 140 cm (55 inch) QLED Ultra HD (4K) Smart Google TV',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹22,999',

        },



        {
            img: './110.jpeg',
            title: 'Coocaa 138 cm (55 inch) Ultra HD (4K) LED Smart Coolita TV 2024',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹29,999',

        }, {
            img: './111.jpeg',
            title: 'acerpure Swift TV by Acer (2024 Series) 139 cm (55 inch) Ultra HD (4K) LED Smart Google TV 2024',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹34,999',

        }, {
            img: './112.jpeg',
            title: 'Hisense U6N Pro 140 cm (55 inch) Ultra HD (4K) Mini LED Smart VIDAA TV 2024',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹54,999',

        }, {
            img: './113.jpeg',
            title: 'Hisense E68N 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹69,999',

        },


        {
            img: './114.jpeg',
            title: 'Hisense U7N 139 cm (55 inch) Ultra HD (4K) Mini LED Smart VIDAA TV 2024 ',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹39,999',

        }, {
            img: './115.jpeg',
            title: 'Hisense E68N 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹34,999',

        }, {
            img: './116.jpeg',
            title: 'TOSHIBA C350NP 139 cm (55 inch) Ultra HD (4K) LED Smart Google TV 2024',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹67,990',

        }, {
            img: './117.jpeg',
            title: 'LG QNED 75 139 cm (55 inch) Ultra HD (4K) QNED Smart WebOS TV 2024',
            specs: [
                'Operating System: Google TV',
                'Ultra HD (4K) 3840 x 2160 Pixels',
                'Launch Year: 2024',
                '2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹57,999',

        },



        {
            img: './21.jpeg',
            title: 'Acer V PRO Series 80.01 cm (32 inch) QLED HD Ready Smart Google TV ',
            specs: [
                ' Operating System: Google TV',

                ' HD Ready 1366 x 768 Pixels',

                ' Launch Year: 2024',

                '1 Year Warranty',
            ],
            price: '₹12,999',

        },
        {
            img: './22.jpeg',
            title: 'Hisense 80 cm (32 inch) HD Ready LED Smart Google TV 2024 ',
            specs: [
                ' Operating System: Google TV',

                ' HD Ready 1366 x 768 Pixels',

                ' Launch Year: 2024',

                '1 Year Warranty',
            ],
            price: '₹11,999',
        },
        {
            img: './23.jpeg',
            title: 'Acer J Series 80.01 cm (32 inch) HD Ready LED Smart Google TV 2024',
            specs: [
                ' Operating System: Google TV',

                ' HD Ready 1366 x 768 Pixels',

                ' Launch Year: 2024',

                '1 Year Warranty',
            ],
            price: '₹10,999',

        },
        {
            img: './24.jpeg',
            title: 'Acer I PRO Series 80.01 cm (32 inch) HD Ready LED Smart Google TV 2024',
            specs: [
                ' Operating System: Google TV',

                ' HD Ready 1366 x 768 Pixels',

                ' Launch Year: 2024',

                '1 Year Warranty',
            ],
            price: '₹11,999',

        },



        {
            img: './21 (1).jpeg',
            title: 'Mi by Xiaomi X Series 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2024 ',
            specs: [
                ' Operating System: Google TV',

                ' Ultra HD (4K) 3840 x 2160 Pixels',

                'Launch Year: 2024',

                ' 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹25,999',

        },
        {
            img: './22 (1).jpeg',
            title: 'Coocaa 108 cm (43 inch) Full HD LED Smart Coolita TV 2024',
            specs: [
                ' Operating System: Google TV',

                ' Ultra HD (4K) 3840 x 2160 Pixels',

                'Launch Year: 2024',

                ' 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹12,999',

        },
        {
            img: './23 (1).jpeg',
            title: 'realme TechLife CineSonic 109 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2024',
            specs: [
                ' Operating System: Google TV',

                ' Ultra HD (4K) 3840 x 2160 Pixels',

                'Launch Year: 2024',

                ' 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹20,499',

        }, {
            img: './24 (1).jpeg',
            title: 'SONY Bravia 2 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2024',
            specs: [
                ' Operating System: Google TV',

                ' Ultra HD (4K) 3840 x 2160 Pixels',

                'Launch Year: 2024',

                ' 2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)',
            ],
            price: '₹39,990',

        },
    ];

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">

            <input type="search" placeholder="Search for a product..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-bar" />

            <div className="product-list">
                {
                    filteredProducts.map((product, index) => (
                        <div className="product-item" key={index}>

                            <img src={product.img} className="product-image" />

                            <div className="product-details">

                                <h3 className="product-title">{product.title}</h3>

                                <ul className="product-specs">
                                    {product.specs.map((spec, specIndex) => (
                                        <li key={specIndex} className="product-spec">
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                                <span className="product-price">{product.price}</span>
                            </div>
                        </div>
                    ))}

                {filteredProducts.length === 0 && <p className="no-results">No products found</p>}
            </div>
        </div>
    );
}
