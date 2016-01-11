import React, {Component} from 'react';

class LogoBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='logoBar'>
                <div className='comWidth'>
                    <div className='logo float-left'>
                        <a href='#'><img src='../../../resource/img/logo.png' alt='' /></a>
                    </div>
                    <div className='search_box float-left'>
                        <input className='search_text float-left' />
                        <input type='button' value="搜 索" className='searcg_btn float-right' />
                    </div>
                    <div className='shopCar float-right'>
                        <span className='shopText float-left'>购物车</span>
                        <span className='shopNum float-left'>0</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogoBar;
