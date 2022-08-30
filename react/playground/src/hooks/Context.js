import React, { useState, createContext, useContext, useId } from 'react'

const AppContext = createContext(null);
const App = () => {
    const [list, setList] = useState([1, 2, 3, 4, 5, 60, 7, 8])
    const id = useId();
    return (
        <AppContext.Provider value={{ list, setList }}>
            <div>
                <h1>ID: {id}</h1>
                <List />
            </div>
        </AppContext.Provider>
    )
}
export const List = () => {
    return (
        <div>
            <Item />
        </div>
    )
}

export const Item = () => {
    const { list } = useContext(AppContext)
    return (
        <div>Item {list[5]}</div>
    )
}
export default App