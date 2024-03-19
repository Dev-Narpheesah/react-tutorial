import React  from 'react'
import './content.css';

const Content = () => {
    const handleNameChange = () => {
        const names = ["Eef", "Oyee", "zainab"];
        const int = Math.floor(Math.random() * 3);
        return (names[int]);
    };

    const handleClick = () => {
        console.log('You clicked')
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }

   
    return (
        <main className='student'>
            <h1>{handleNameChange()}</h1>
            <button onClick={() => handleClick2(`Hayzed`)}>Click Me</button>
            <button onDoubleClick={() => handleClick2(`Hayzed`)}>Click Me</button>

           
        </main>
    )

}

export default Content