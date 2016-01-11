import React, {Component} from 'react';
import TopBar from '../../common/components/TopBar';
import LogoBar from '../../common/components/LogoBar';
import NavBar from '../../common/components/NavBar';
import Banner from '../../common/components/Banner';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navList } = this.props;
        console.log('navList' + navList);
        debugger
        
        return (
            <div>
                <TopBar />
                <LogoBar />
                <NavBar navList={navList} />
                <Banner />
            </div>

        );
    }
}

module.exports = Header;
