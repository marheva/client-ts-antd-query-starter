import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from '../../services';

function Root(): JSX.Element {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default Root;