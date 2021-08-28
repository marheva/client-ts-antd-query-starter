import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeLayout } from '../../../App/core/layouts';
import DashboardInitialization from '../../../components/DashboardInitialization';
import CatalogInitialization from '../../../components/CatalogInitialization';
import { CatalogScreen, DashboardScreen } from '../../../screens';
import CartInitialization from '../../../components/CartInitialization';
import CartScreen from '../../../screens/CartScreen';
import { APP_PATH } from '../../../constants';

const { PATHS: { DASHBOARD, CATALOG, CART } = {} } = APP_PATH;

function AppRoutes() {
    return (
        <Switch>
            <Route path={DASHBOARD} exact component={() => {
                return (
                    <HomeLayout>
                        <DashboardInitialization>
                            <DashboardScreen />
                        </DashboardInitialization>
                    </HomeLayout>
                )
            }} />
            <Route path={CATALOG} component={() => {
                return (
                    <HomeLayout>
                        <CatalogInitialization>
                            <CatalogScreen />
                        </CatalogInitialization>
                    </HomeLayout>
                )
            }} />
            <Route path={CART} component={() => {
                return (
                    <HomeLayout>
                        <CartInitialization>
                            <CartScreen />
                        </CartInitialization>
                    </HomeLayout>
                )
            }} />
        </Switch >
    );
}

export default AppRoutes;
