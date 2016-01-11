import React, {Component} from 'react';

require('../../../resource/sass/clear.css');
require('../../../resource/sass/main.css');

class Header extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='headerBar'>
                <div className='topBar'>
                    <div className='comWidth'>
                        <div className='leftArea'>
                            <a href='#' className='collection'>收藏网站</a>
                        </div>
                        <div className='rightArea'>
                            欢迎来到该网站！<a href=''>[登陆]</a><a href=''>[免费注册]</a>
                        </div>
                    </div>
                </div>
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
                <div className='navBar'>
                    <div className='comWidth'>
                        <div className='shopClass float-left'>
                            <h3>全部商品分类<i></i></h3>
                            <div className='shopClass_show'>
                                <dl className='shopClass_item'>
                                    <dt>
                                        <a href='#' className='b'>手机</a>
                                        <a href='#' className='b'>数码</a>
                                        <a href='#' className='b alink'>合约机</a>
                                    </dt>
                                    <dd>
                                        <a href='#'>iPhone</a>
                                        <a href='#'>单反</a>
                                        <a href='#'>智能设备</a>
                                    </dd>
                                </dl>
                                <dl className='shopClass_item'>
                                    <dt>
                                        <a href='#' className='b'>手机</a>
                                        <a href='#' className='b'>数码</a>
                                        <a href='#' className='b alink'>合约机</a>
                                    </dt>
                                    <dd>
                                        <a href='#'>iPhone</a>
                                        <a href='#'>单反</a>
                                        <a href='#'>智能设备</a>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <ul className='nav float-left'>
                            <li><a href='#' className='active'>数码城</a></li>
                            <li><a href='#'>数码城</a></li>
                            <li><a href='#'>数码城</a></li>
                            <li><a href='#'>数码城</a></li>
                            <li><a href='#'>数码城</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
