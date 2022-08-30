import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Error from './Error'
const About = lazy(() => import('./About'));
const Table = lazy(() => import('./Table'));
const App = () => {
    return (
        <div>
        <Router>
        <Link to="/about">About</Link>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<Suspense fallback={<p>Loading...</p>}><About /></Suspense>}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/table/:id" element={<Suspense fallback={<p>Loading..</p>}><Table /></Suspense>}/>
                    <Route path="*" element={<Error />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App