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
            list: []
        }
    }
    onChange (event) {
        console.log(111)
        this.setState({
            inputValue :event.target.value
        })
    }
    closeInput (event) {
        this.setState({
            inputValue : ''
        })
    }
    handleIn () {
        var item = this.state.inputValue
        this.setState({
            list: [item, ...this.state.list]
        })
    }
    render() {
        const icon = (
            <i 
                className="iconfont close-btn"
                onClick={this.closeInput.bind(this)}
            >&#xe651;</i>
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
                    {(this.state.inputValue !== "") && icon}
                </div>
                <button onClick={this.handleIn.bind(this)}>添加</button>
                <div className="content-wrap">
                    {
                        this.state.list.map((i, index) => {
                            <p>{i}</p>
                        })
                    }
                </div>
            </div>
        );
    }
}
export default App;
