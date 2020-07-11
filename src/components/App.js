import React from 'react';
import './App.css';
class App extends React.Component{
    render() {
        return (
            <div className="ui top attached tabular menu">
                <div>
                    Logo
                     </div>
                <div className="right menu">
                    <div className="ui buttons">
                        <button className="ui button">
                          <a href="#"> Sign in as Doctor </a>
                        </button>
                        <div className="or"></div>
                        <button className="ui positive button btn">
                            <a href="#">Sign in as Patient</a>
                        </button>
                 </div>
                </div>
            </div>
        );
                }
}
export default App;