import React, { useEffect, useRef, useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const emailInput = useRef(null);

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  const addData = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Both email and password are required");
      return;
    }

    const newEntry = { email, password };
    setAllEntry([...allEntry, newEntry]);
    setEmail(""); 
    setPassword("");
  };

  const deleteEntry = (index) => {
    const updatedEntries = allEntry.filter((_, i) => i !== index);
    setAllEntry(updatedEntries);
  };

  return (
    <div className='main1'>
      <div className="main">
        <div className='div1'>
          <div className="form">
            <div className="txt">
              <center>
                <h1>Login Form</h1>

                <form onSubmit={addData}>
                  <input
                    type="email"
                    placeholder='Enter Email'
                    ref={emailInput}
                    className='input1'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                  /> <br/><br />
                  <input
                    type="password"
                    placeholder='Enter Password'
                    className='input1'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br /><br />
                  <button className='btn1'>Submit</button>
                </form>

              </center>
            </div>
          </div>
        </div>

        <div className="entries">
          <center>
            <br />
            <h2>Submitted Entries:</h2>
            {allEntry.length === 0 ? (
              <p>No entries</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allEntry.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.email}</td>
                      <td>{entry.password}</td>
                      <td>
                        <button onClick={() => deleteEntry(index)} className='delete-btn'>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </center>

        </div>
      </div>

    </div>
  );
}
