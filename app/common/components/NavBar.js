import React, {Component} from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {navList} = this.props;
        navList = navList ? navList : [];
        let nalist = navList.map( (list, index) => {
            if(index === 0) {
                return <li key={index}><a href='#' className='active'>{list.name}</a></li>
            }
            return <li key={index}><a href='#'>{list.name}</a></li>
        });
        return (
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
                        {nalist}
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;
