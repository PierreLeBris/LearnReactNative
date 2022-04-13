import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

const Navigation = props => {
    const history = useHistory()
    return (
        <nav>
              <p onClick={() => history.push('/')}> HOME </p>
              <p onClick={() => history.push('/moto1')}> Daytona </p>
              <p onClick={() => history.push('/moto2')}> MT 07 </p>
              <p onClick={() => history.push('/moto3')}> Streetfighter </p>
              <p>
              </p>
        </nav>
    );
};

Navigation.propTypes = {
    
};

export default Navigation;
