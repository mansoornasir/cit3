// The value of the reference is persisted (stays the same) between component re-renderings;
// Updating a reference doesn't trigger a component re-rendering.
// *** Difference with State ***
// Updating a reference doesn't trigger re-rendering, while updating the state makes the component re-render;
// The reference update is synchronous (the updated reference value is available right away), while the state update is asynchronous (the state variable is updated after re-rendering).


// const reference = useRef(initialValue);
// get <--      const value = reference.current;
// update <--   reference.current = newValue;

// *** The following renders only once and value changes many times without re-rendering ***
// import { useRef } from 'react';

// const Ref = () => {
//     const countRef = useRef(0);
//     const handle = () => {
//         countRef.current++;
//         console.log(`Clicked ${countRef.current} times`);
//     };
//     console.log('I rendered!');
//     return <button onClick={handle}>Click me</button>;
// }

// export default Ref

// Stop watch example

// import { useRef, useState, useEffect } from 'react';
// export default function Ref() {
//     const timerIdRef = useRef(0);
//     const [count, setCount] = useState(0);
//     const startHandler = () => {
//         if (timerIdRef.current) { return; }
//         timerIdRef.current = setInterval(() => setCount(c => c + 1), 1000);
//     };
//     const stopHandler = () => {
//         clearInterval(timerIdRef.current);
//         timerIdRef.current = 0;
//     };
//     useEffect(() => {
//         return () => clearInterval(timerIdRef.current);
//     }, []);
//     return (
//         <div>
//             <div>Timer: {count}s</div>
//             <div>
//                 <button onClick={startHandler}>Start</button>
//                 <button onClick={stopHandler}>Stop</button>
//             </div>
//         </div>
//     );
// }

// useRef to access Dom Elements
// import { useRef, useEffect } from 'react';
// export default function Ref() {
//     const elementRef = useRef();
//     useEffect(() => {
//         const divElement = elementRef.current;
//         console.log(divElement); // logs <div>I'm an element</div>
//     }, []);
//     return (
//         <div ref={elementRef}>
//             I'm an element
//         </div>
//     );
// }

// import { useRef, useEffect } from 'react';
// export default function Ref() {
//     const inputRef = useRef();
//     useEffect(() => {
//         // Logs `HTMLInputElement` 
//         console.log(inputRef.current);
//         inputRef.current.focus();
//     }, []);
//     // Logs `undefined` during initial rendering
//     console.log(inputRef.current);
//     return <input ref={inputRef} type="text" />;
// }