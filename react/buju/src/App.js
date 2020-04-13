import React, { Component } from 'react';
import './app.scss';

export default class App extends Component {
    state = {
        list:[1, 2, 3,4, 5,6],
        isjishu: false,
        list1: [],
        isShowBtn: true
    }
    componentDidMount() {
        this.getList()
    }
    getList() {
        const {list, list1 } = this.state;
        const len = list.length;
        let realList = []

        if(len % 2 === 0) {
            realList = list.slice(0, 4);
            this.setState({
                isjishu : false,
                list1: realList
            })

        } else {
            realList = list.slice(0,3)
            this.setState({
                list1: realList,
                isjishu: true
            })

        }
    }

    handleClick = () => {
        this.setState({
            isShowBtn: false,
            list1:this.state.list
        })
    }
    
    render() {
        const {list, list1, isjishu, isShowBtn} = this.state;

        const btn = (
            <div className="btn-wrap">
                <button 
                    className="btn-fold"
                    onClick={this.handleClick}
                >
                    添加全部
                </button>
            </div>
        )

        return (
            <div>
                <div className={["jishuWrap", isjishu?"isTrue":null].join(' ')}>
                    {
                        list1.map((item, index) => {
                            return (
                                <div className="itemWrap" key={index}>
                                    <div className="itemCon">
                                        {item}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {(list.length > 3 && list.length > 4) && isShowBtn && btn}
            </div>
        );
    }
}
