import React, { useState } from 'react'

export default function Addform() {

    const [category, setCategory] = useState('');

    const [color, setColor] = useState('');
    const [storage, setStorage] = useState('');
    const [ram, setRam] = useState('');

    const [colorerr, setColorerr] = useState('');
    const [stoerr, setStoerr] = useState('');
    const [ramerr, setRamerr] = useState('');


    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [no, setNo] = useState('');

    const [nameerr, setNameerr] = useState('');
    const [numerr, setNumerr] = useState('');
    const [noerr, setNoerr] = useState('');



    const [showInputs, setShowInputs] = useState(false);

    const handleClick = () => {


        if (!name) {
            setNameerr("Please Fill This Fild");
        }
        else {
            setNameerr("");
        }
        if (!number) {
            setNumerr("Please Fill This Fild");
        }
        else {
            setNumerr("");
        }
        if (!no) {
            setNoerr("Please Fill This Fild");
        }
        else {
            setNoerr("");
        }
        setShowInputs(true);
    };

    const submit = (e) => {
        e.preventDefault();
        if (!color) {
            setColorerr("Please Fill This Fild");
        }
        else {
            setColorerr("");
        }
        if (!storage) {
            setStoerr("Please Fill This Fild");
        }
        else {
            setStoerr("");
        }
        if (!ram) {
            setRamerr("Please Fill This Fild");
        }
        else {
            setRamerr("");
        }
    }
    return (
        <>


            <div className="main">
                <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png" className='logo' alt="" />

                <form action="">
                    <br />
                    <label className='lb' htmlFor="" >Name:</label><br />
                    <input type="text" className='in1' placeholder='Enter name' onChange={(e) => setName(e.target.value)} /><br />
                    <span>{nameerr}</span><br />

                    <br />
                    <label className='lb' htmlFor="">Mobail no:</label><br />
                    <input type="text" className='in1' placeholder='Enter mobail no' onChange={(e) => setNumber(e.target.value)} /><br />
                    <span>{numerr}</span><br />

                    <br />
                    <label className='lb' htmlFor="">GST no:</label><br />
                    <input type="text" className='in1' placeholder='Enter GST No' onChange={(e) => setNo(e.target.value)} /><br /><br />
                    <span>{noerr}</span><br />

                    <br />

                    <br />
                </form>
            </div>
            <select name="" id="" onChange={(e) => setCategory(e.target.value)} >
                <option value="">Category</option>
                <option value="el">Electronics</option>
                <option value="cl">Fashion</option>
                <option value="be">Beauty</option>
                <option value="jw">Jwellery</option>
                <option value="wa">Watch</option>
            </select>

            {
                category == "el" &&
                <div className='container'>
                    <div className="row">
                        <div className="col col-12">
                            <div>
                                <img src="https://m.media-amazon.com/images/I/41waxmb407L.AC_UF480,480_SR480,480.jpg" class="img-fluid img2" alt="..." />
                            </div>
                            <div className="text">
                                <p>Samsung Galaxy S23 Ultra 5G AI Smartphone</p>
                                <p>$1,24,999</p>
                                <button onClick={handleClick}>ADD TO CART</button>
                                {showInputs && (
                                    <div className="input-container">
                                        <br />
                                        <input type="text" placeholder="Color : Crystal clear" onChange={(e) => setColor(e.target.value)} /> <br />
                                        <span>{colorerr}</span><br />
                                        <input type="text" placeholder="Storage : 126GB" onChange={(e) => setStorage(e.target.value)} /> <br />
                                        <span>{stoerr}</span><br />
                                        <input type="text" placeholder="Ram : 8GB" onChange={(e) => setRam(e.target.value)} /> <br />
                                        <span>{ramerr}</span><br />

                                        <button onClick={submit}>SUBMIT</button>
                                    </div>
                                )}
                            </div>
                        </div>



                    </div>
                </div>
            }



            {
                category == "cl" &&
                <div className='container'>
                    <div className="row">
                        <div className="col col-12">
                            <div>
                                <img src="https://m.media-amazon.com/images/I/61HMaUT1xgL.AC_UL320.jpg" class="img-fluid img2" alt="..." />
                            </div>
                            <div className="text">
                                <p>Indya Women Pastel Pink Printed Ruffled Pre-Stitched Saree With Blouse</p>
                                <p>$3250</p>
                                <button onClick={handleClick}>ADD TO CART</button>
                                {showInputs && (
                                    <div className="input-container">
                                        <br />
                                        <input type="text" placeholder="Color : Crystal clear" onChange={(e) => setColor(e.target.value)} /> <br />
                                        <span>{colorerr}</span><br />
                                        <input type="text" placeholder="Size : s/m/l/xl/xxl" onChange={(e) => setStorage(e.target.value)} /> <br />
                                        <span>{stoerr}</span><br />
                                        <input type="text" placeholder="Price : $/₹" onChange={(e) => setRam(e.target.value)} /> <br />
                                        <span>{ramerr}</span><br />

                                        <button onClick={submit}>SUBMIT</button>
                                    </div>
                                )}
                            </div>
                        </div>



                    </div>
                </div>
            }


            {
                category == "be" &&
                <div className='container'>
                    <div className="row">
                        <div className="col col-12">
                            <div>
                                <img src="https://m.media-amazon.com/images/I/51wHGjfYutL.AC_UL320.jpg" class="img-fluid img2" alt="..." />
                            </div>
                            <div className="text">
                                <p>RENEE Cover-Up Hair Powder- Black, Helps Cover Grey Roots & Bald Spots Instantly, Highly Pigmented, Fuller and Denser, Long-Lasting & Matte Finish, Super-Fine Powder for Flawless Application, 4gm</p>
                                <p>$697</p>
                                <button onClick={handleClick}>ADD TO CART</button>
                                {showInputs && (
                                    <div className="input-container">
                                        <br />
                                        <input type="text" placeholder="Product Name : Lipstick" onChange={(e) => setColor(e.target.value)} /> <br />
                                        <span>{colorerr}</span><br />
                                        <input type="text" placeholder="Brand Name : SUGAR" onChange={(e) => setStorage(e.target.value)} /> <br />
                                        <span>{stoerr}</span><br />
                                        <input type="text" placeholder="Price : $/₹" onChange={(e) => setRam(e.target.value)} /> <br />
                                        <span>{ramerr}</span><br />

                                        <button onClick={submit}>SUBMIT</button>
                                    </div>
                                )}
                            </div>
                        </div>



                    </div>
                </div>
            }



            {
                category == "jw" &&
                <div className='container'>
                    <div className="row">
                        <div className="col col-12">
                            <div>
                                <img src="https://m.media-amazon.com/images/I/41s06liv02L.AC_SR140,110.jpg" class="img-fluid img2" alt="..." />
                            </div>
                            <div className="text">
                                <p>ZAVERI PEARLS Pink & Green Beads Cluster Drops Kundan Choker Necklace Earring & Ring Set For Women-ZPFK13800</p>
                                <p>$419</p>
                                <button onClick={handleClick}>ADD TO CART</button>
                                {showInputs && (
                                    <div className="input-container">
                                        <br />
                                        <input type="text" placeholder="Material : Gold/Silver" onChange={(e) => setColor(e.target.value)} /> <br />
                                        <span>{colorerr}</span><br />
                                        <input type="text" placeholder="Weight : 10g/5g" onChange={(e) => setStorage(e.target.value)} /> <br />
                                        <span>{stoerr}</span><br />
                                        <input type="text" placeholder="Price : $/₹" onChange={(e) => setRam(e.target.value)} /> <br />
                                        <span>{ramerr}</span><br />

                                        <button onClick={submit}>SUBMIT</button>
                                    </div>
                                )}
                            </div>
                        </div>



                    </div>
                </div>
            }



            {
                category == "wa" &&
                <div className='container'>
                    <div className="row">
                        <div className="col col-12">
                            <div>
                                <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/12e11454-5b40-4e02-81e3-1da51cbfb28c.CR0,0,1200,628_SX507_QL70.png" class="img-fluid img2" alt="..." />
                            </div>
                            <div className="text">
                                <p>Noise ColorFit Pro 4 Alpha 1.78" AMOLED Display, Bluetooth Calling Smart Watch, Functional Crown, Metallic Build, Intelligent Gesture Control, Instacharge (Jet Black)</p>
                                <p>$2,499</p>
                                <button onClick={handleClick}>ADD TO CART</button>
                                {showInputs && (
                                    <div className="input-container">
                                        <br />
                                        <input type="text" placeholder="Color : Crystal clear" onChange={(e) => setColor(e.target.value)} /> <br />
                                        <span>{colorerr}</span><br />
                                        <input type="text" placeholder="Model Name : Breitling Chronomat" onChange={(e) => setStorage(e.target.value)} /> <br />
                                        <span>{stoerr}</span><br />
                                        <input type="text" placeholder="Features : Calling/Simple" onChange={(e) => setRam(e.target.value)} /> <br />
                                        <span>{ramerr}</span><br />
                                        <input type="text" placeholder="Brand Name : boat/Noice" onChange={(e) => setRam(e.target.value)} /> <br />

                                        <span>{ramerr}</span><br />
                                        <input type="text" placeholder="Price : $/₹" onChange={(e) => setRam(e.target.value)} /> <br />
                                        <span>{ramerr}</span><br />


                                        <button onClick={submit}>SUBMIT</button>
                                    </div>
                                )}
                            </div>
                        </div>



                    </div>
                </div>
            }







        </>
    )
}