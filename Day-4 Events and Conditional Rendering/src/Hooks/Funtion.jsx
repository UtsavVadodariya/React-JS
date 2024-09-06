import React, { useState } from 'react';

export default function Function() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const submit = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
        const obj = {
            name: name,
            subject: subject
        };
        console.log(obj);
    };

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>

            <form onSubmit={submit}>
                <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Enter your Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>

            {
                isVisible ? <h1>Bye</h1> : <h1>Hii</h1>
            }
            <button onClick={() => setIsVisible(!isVisible)}>Click</button>
        </div>
    );
}
