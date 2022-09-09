import {Component} from 'react';
import './Home.css'
class Home extends Component 
{
    render() {
        return (
            <div>
                <p className="test">This is a paragraph in a Home compoenent</p>
                <button className="btn btn-primary">Click</button>
            </div>

        );
    }

}

export default Home;