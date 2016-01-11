import React, {Component} from 'react';

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='banner comWidth clearfix'>
                <div className='banner_bar banner-big'>
                    <ul className='img_box'>
                        <li>
                            <a href='#'><img src='../../../resource/img/banner/banner1.jpg' alt='banner' /></a>
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
        );
    }
}

export default Banner;
