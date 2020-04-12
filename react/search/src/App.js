import React, { Component } from 'react';
import './app.scss';
import './iconfont/iconfont.css'

const searchKeyword = 'searchKeyword';// 搜索记录本地存储key

export default class App extends Component {
    state = {
        inputValue : '',
            searchHistory: this.searchKeyword ? this.searchKeyword.split(',').slice(0, 10) : []
    }

    get searchKeyword() {
        return localStorage.getItem(searchKeyword);
    }

   //监听输入框的值
    onChange = (event) => {
        this.setState({
            inputValue :event.target.value
        })
    }
    //判断输入框后清空按钮
    clearInput = (event) => {
        this.setState({
            inputValue : ''
        })
    }
    //提交按钮
    handleInput = () => {
        const {
            inputValue
        } = this.state;
        const searchHistory = this.searchKeyword;

        // // 没有搜索内容，此时为取消按钮
        // if (inputValue === '') {
        //     history.back();
        //     return;
        // }

        // 如果本地存储已经有值，则应该采用追加写入
        searchHistory ? localStorage.setItem(searchKeyword, `${inputValue},${searchHistory}`) : localStorage.setItem(searchKeyword, inputValue);

        this.setState({
            isEndSearch: true,
            searchHistory: this.searchKeyword.split(',').slice(0, 10)
        });

    }
    
    render() {
        const icon = (
            <i 
                className="iconfont close-btn"
                onClick={this.clearInput.bind(this)}
            >
                &#xe651;
            </i>
        )

        const {inputValue, searchHistory} = this.state;
        
        return (
            <div>
                <div className="search-wrap">
                    <div className="search-item">
                        <i className="iconfont">&#xe63c;</i>
                        <input 
                            type="text" 
                            placeholder="请输入" 
                            value={inputValue}
                            onChange = {this.onChange}
                        />
                        {(inputValue !== "") && icon}
                    </div>
                    <button onClick={this.handleInput} className="btn-handle">添加</button>
                </div>
                <dl className="content-wrap">
                    <dt>
                        <span>最近搜索记录</span>
                    </dt>
                    <dd> 
                        {
                            searchHistory.map((i, index) => {
                                return (
                                    <p key={index}>{i}</p>
                                )
                            })
                        }
                    </dd>
                </dl>
            </div>
        );
    }
}
