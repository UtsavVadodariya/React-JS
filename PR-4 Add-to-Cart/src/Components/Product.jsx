import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function App() {
  const [page, setPage] = useState('home');
  const [category, setCategory] = useState('');

  const [sellerName, setSellerName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gstin, setGstin] = useState('');
  const [radioValue, setRadioValue] = useState('');

  const [productName, setProductName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [mfgDate, setMfgDate] = useState('');
  const [warranty, setWarranty] = useState('');
  const [returnPeriod, setReturnPeriod] = useState('');
  const [amount, setAmount] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSellerSubmit = (e) => {
      e.preventDefault();
      setPage('next');
  };

  const handleProductSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
  };


    return (

        <div className='main'>


            {page === 'home' ? (
                <div>
                    <h1>Seller Details</h1>
                    <form action="" onSubmit={handleSellerSubmit}>
                        <TextField id="outlined-basic" label="Seller Name" variant="outlined" required />
                        <TextField id="outlined-basic" label="Email ID" variant="outlined" required />
                        <TextField id="outlined-basic" label="Mobile Number" variant="outlined" required />

                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"

                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="All Categories" control={<Radio />} label="All Categories" />
                                <FormControlLabel value="Only Books" control={<Radio />} label="Only Books" />
                            </RadioGroup>
                        </FormControl>

                        <TextField id="outlined-basic" label="GSTIN" variant="outlined" required />
                        <button onClick={goToNextPage} type='submit'>Go to Next Page</button>

                    </form>
                </div>
            ) : (
                <div>
                    <h1>Product Details</h1>
<form action="" onSubmit={handleProductSubmit}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <MenuItem value={"Electronics"}>Electronics</MenuItem>
                            <MenuItem value={"Beauty"}>Beauty</MenuItem>
                            <MenuItem value={"Fashion"}>Fashion</MenuItem>
                            <MenuItem value={"Grocery"}>Grocery</MenuItem>
                            <MenuItem value={"Accessories"}>Accessories</MenuItem>
                        </Select>
                    </FormControl>


                    {
                        category == "Electronics" && <TextField id="outlined-basic" label="Product Name" variant="outlined" required value={productName} onChange={(e) => setProductName(e.target.value)}/>

                    }
                    {
                        category == "Electronics" && <TextField id="outlined-basic" label="Brand Name" variant="outlined" required value={brandName} onChange={(e) => setBrandName(e.target.value)}/>
                    }
                    {
                        category == "Electronics" && <TextField id="outlined-basic" label="MFG Date" variant="outlined" required value={mfgDate} onChange={(e) => setMfgDate(e.target.value)}/>
                    }
                    {
                        category == "Electronics" && <TextField id="outlined-basic" label="Warranty" variant="outlined" required value={warranty} onChange={(e) => setWarranty(e.target.value)}/>
                    }
                    {
                        category == "Electronics" && <TextField id="outlined-basic" label="Return Period" variant="outlined" required value={returnPeriod} onChange={(e) => setReturnPeriod(e.target.value)}/>
                    }
                    {
                        category == "Electronics" && <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                label="Amount"
                            />
                        </FormControl>
                    }

                    {
                        category == "Beauty" && <TextField id="outlined-basic" label="Product Name" variant="outlined" required value={productName} onChange={(e) => setProductName(e.target.value)}/>
                    }
                    {
                        category == "Beauty" && <TextField id="outlined-basic" label="Brand Name" variant="outlined" required value={brandName} onChange={(e) => setBrandName(e.target.value)}/>
                    }
                    {
                        category == "Beauty" && <TextField id="outlined-basic" label="MFG Date" variant="outlined" required value={mfgDate} onChange={(e) => setMfgDate(e.target.value)}/>
                    }
                    {
                        category == "Beauty" && <TextField id="outlined-basic" label="Return Period" variant="outlined" required value={returnPeriod} onChange={(e) => setReturnPeriod(e.target.value)}/>
                    }
                    {
                        category == "Beauty" && <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                label="Amount"
                            />
                        </FormControl>
                    }


                    {
                        category == "Fashion" && <TextField id="outlined-basic" label="Product Name" variant="outlined" required value={productName} onChange={(e) => setProductName(e.target.value)}/>
                    }
                    {
                        category == "Fashion" && <TextField id="outlined-basic" label="Brand Name" variant="outlined" required value={brandName} onChange={(e) => setBrandName(e.target.value)}/>
                    }
                    {
                        category == "Fashion" && <TextField id="outlined-basic" label="MFG Date" variant="outlined" required value={mfgDate} onChange={(e) => setMfgDate(e.target.value)}/>
                    }
                    {
                        category == "Fashion" && <TextField id="outlined-basic" label="Return Period" variant="outlined" required value={returnPeriod} onChange={(e) => setReturnPeriod(e.target.value)}/>
                    }
                    {
                        category == "Fashion" && <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                label="Amount"
                            />
                        </FormControl>
                    }

                    {
                        category == "Grocery" && <TextField id="outlined-basic" label="Product Name" variant="outlined" required value={productName} onChange={(e) => setProductName(e.target.value)}/>
                    }
                    {
                        category == "Grocery" && <TextField id="outlined-basic" label="Brand Name" variant="outlined" required value={brandName} onChange={(e) => setBrandName(e.target.value)}/>
                    }
                    {
                        category == "Grocery" && <TextField id="outlined-basic" label="MFG Date" variant="outlined" required value={mfgDate} onChange={(e) => setMfgDate(e.target.value)}/>
                    }
                    {
                        category == "Grocery" && <TextField id="outlined-basic" label="EXP Date" variant="outlined" required />
                    }
                    {
                        category == "Grocery" && <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                label="Amount"
                            />
                        </FormControl>
                    }


                    {
                        category == "Accessories" && <TextField id="outlined-basic" label="Product Name" variant="outlined" required value={productName} onChange={(e) => setProductName(e.target.value)}/>
                    }
                    {
                        category == "Accessories" && <TextField id="outlined-basic" label="Brand Name" variant="outlined" required value={brandName} onChange={(e) => setBrandName(e.target.value)}/>
                    }
                    {
                        category == "Accessories" && <TextField id="outlined-basic" label="MFG Date" variant="outlined" required value={mfgDate} onChange={(e) => setMfgDate(e.target.value)}/>
                    }
                    {
                        category == "Accessories" && <TextField id="outlined-basic" label="Warranty" variant="outlined" required value={warranty} onChange={(e) => setWarranty(e.target.value)}/>
                    }
                    {
                        category == "Accessories" && <TextField id="outlined-basic" label="Return Period" variant="outlined" required value={returnPeriod} onChange={(e) => setReturnPeriod(e.target.value)}/>
                    }
                    {
                        category == "Accessories" && <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                label="Amount"
                            />
                        </FormControl>
                    }

                    <button onClick={() => setPage('home')}>Go Back to Home</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default App;
