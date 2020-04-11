import React, { Component } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import store from './stroe';
import './app.scss';
import './iconfont/iconfont.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue : '',
            list : [],
        }
    }
    onChange (event) {
        console.log(111)
        this.setState ={
            inputValue : event.target.value
        }
        console.log(this.state.inputValue)
    }
    render() {
        const icon = (
            <i className="iconfont">&#xe651;</i>
        )
        
        return (
            <div className="search-wrap">
                <div className="search-item">
                    <i className="iconfont">&#xe63c;</i>
                    <input 
                        type="text" 
                        placeholder="请输入" 
                        value={this.state.inputValue}
                        onChange = {this.onChange.bind(this)}
                    />
                    {icon}
                </div>
            </div>
        );
    }
}
export default App;
