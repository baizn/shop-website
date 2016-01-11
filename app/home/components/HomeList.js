import React, {Component} from 'react';

class HomeList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='shop-title comWidth'>
                    <span className='icon'></span><h3>家用电脑</h3>
                    <a href='#' className='more'>更多&gt;&gt;</a>
                </div>
                <div className='shop-list comWidth'>
                    <div className='left-area'>
                        <div className='banner_bar banner-small'>
                            <ul className='img_box'>
                                <li>
                                    <a href='#'><img src='../../../resource/img/banner/banner-sm-1.jpg' alt='banner' /></a>
                                </li>
                                <li>
                                    <a href='#'><img src='../../../resource/img/banner/banner2.jpg' alt='banner' /></a>
                                </li>
                            </ul>
                            <div className='img_num'>
                                <a href='#' className='active'></a>
                                <a href='#'></a>
                            </div>
                        </div>
                    </div>
                    <div className='right-area'>
                        <div className='shop-list-top'>
                            <div className='shop-item'>
                                <div className='shop-img'>
                                    <a href='#'>
                                        <img src='../../../resource/img/HTC.jpg' />
                                    </a>
                                </div>
                                <h3>HTC新渴望8系列</h3>
                                <p>1899元</p>
                            </div>
                            <div className='shop-item'>
                                <div className='shop-img'>
                                    <a href='#'>
                                        <img src='../../../resource/img/HTC.jpg' />
                                    </a>
                                </div>
                                <h3>HTC新渴望8系列</h3>
                                <p>1899元</p>
                            </div>
                            <div className='shop-item'>
                                <div className='shop-img'>
                                    <a href='#'>
                                        <img src='../../../resource/img/HTC.jpg' />
                                    </a>
                                </div>
                                <h3>HTC新渴望8系列</h3>
                                <p>1899元</p>
                            </div>
                            <div className='shop-item'>
                                <div className='shop-img'>
                                    <a href='#'>
                                        <img src='../../../resource/img/HTC.jpg' />
                                    </a>
                                </div>
                                <h3>HTC新渴望8系列</h3>
                                <p>1899元</p>
                            </div>
                        </div>
                        <div className='shop-list-sm'>
                            <div className='shop-item-sm'>
                                <div className='shop-item-sm-img'>
                                    <a href='#'><img src='../../../resource/img/HTC.jpg' /></a>
                                </div>
                                <div className='shop-item-sm-text'>
                                    <p>NFC技术一碰轻松配对</p>
                                    <h3>¥149.00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeList;
