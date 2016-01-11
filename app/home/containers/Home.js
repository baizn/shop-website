import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import { fetchNavs } from '../actions/action';

import Header from './Header';
import HomeList from '../components/HomeList';

require('../../../resource/sass/clear.css');
require('../../../resource/sass/main.css');
require('../../../resource/sass/banner.css');

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        console.log('componentDidMount=' + this.props);
        dispatch(fetchNavs('home'));
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps=' + nextProps.props);
        if(nextProps.queryParams !== this.props.queryParams) {
            const { dispatch, queryParams } = next.props;
            dispatch(fetchNavs(queryParams));
        }
    }

    render() {
        const {data} = this.props;
        debugger
        console.log('data=' + data);
        return (
            <div>
                <Header navList={data} />
                <HomeList />
            </div>

        );
    }
}

Home.propTypes = {
    data: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { postNavs } = state;
    debugger
    const data = postNavs.data || [];

    console.log(data);
    return {
        data
    }
}
module.exports = connect(mapStateToProps)(Home);
