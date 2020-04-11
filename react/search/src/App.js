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
            list: JSON.parse(localStorage.getItem('list')) || [],
        }
    }
   //监听输入框的值
    onChange (event) {
        this.setState({
            inputValue :event.target.value
        })
    }
    //判断输入框后清空按钮
    closeInput (event) {
        this.setState({
            inputValue : ''
        })
    }
    //提交按钮
    handleIn () {
        this.state.list.push(this.state.inputValue)
    
        localStorage.setItem('list',JSON.stringify(this.state.list));

        this.setState({
            inputValue : '',
        })

    }
    
    render() {
        const icon = (
            <i 
                className="iconfont close-btn"
                onClick={this.closeInput.bind(this)}
            >
                &#xe651;
            </i>
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
                            return (
                                <p key={index}>{i}</p>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
export default App;
