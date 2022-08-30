// import { useState } from 'react';
// export default function Memo() {
//     const [number, setNumber] = useState(1);
//     const [inc, setInc] = useState(0);
//     const factorial = factorialOf(number);
//     const onChange = event => {
//         setNumber(Number(event.target.value));
//     };
//     const onClick = () => setInc(i => i + 1);

//     return (
//         <div>
//             Factorial of
//             <input type="number" value={number} onChange={onChange} />
//             is {factorial}
//             <button onClick={onClick}>Re-render</button>
//         </div>
//     );
// }
// function factorialOf(n) {
//     console.log('factorialOf(n) called!');
//     return n <= 0 ? 1 : n * factorialOf(n - 1);
// }

import { useState, useMemo } from 'react';
export default function Memo() {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    const factorial = useMemo(() => factorialOf(number), [number]);
    const onChange = event => {
        setNumber(Number(event.target.value));
    };
    const onClick = () => setInc(i => i + 1);

    return (
        <div>
            Factorial of
            <input type="number" value={number} onChange={onChange} />
            is {factorial}
            <button onClick={onClick}>Re-render</button>
        </div>
    );
}
function factorialOf(n) {
    console.log('factorialOf(n) called!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
}