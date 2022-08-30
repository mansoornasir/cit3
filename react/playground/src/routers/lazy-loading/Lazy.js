const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));

function App() {
    return (
        <Router>
            <Suspense fallback={<p> Loading...</p>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </Suspense>
        </Router>
    );
}