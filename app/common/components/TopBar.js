import React, {Component} from 'react';

class TopBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='topBar'>
                <div className='comWidth'>
                    <div className='left-area'>
                        <a href='#' className='collection'>收藏网站</a>
                    </div>
                    <div className='right-area'>
                        欢迎来到该网站！<a href=''>[登陆]</a><a href=''>[免费注册]</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar;
