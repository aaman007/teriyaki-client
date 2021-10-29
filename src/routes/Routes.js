import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from "./index";
import { login as loginUrl, home as homeUrl } from '../urls';

const Routes = () => {
    const isLoggedIn = useSelector(state => state?.auth.isLoggedIn);

    const renderRoute = (route) => {
        const {
            name,
            component: Component,
            layout: Layout,
            path,
            isProtected,
            redirectIfLoggedIn
        } = route;

        let routeContent = (
            <Layout>
                <Component />
            </Layout>
        );

        if (isProtected && !isLoggedIn) {
            routeContent = <Redirect to={loginUrl()} key={name} />;
        }
        else if(redirectIfLoggedIn && isLoggedIn) {
            routeContent = <Redirect to={homeUrl()} key={name} />;
        }

        return (
            <Route path={path} exact key={name}>
                {routeContent}
            </Route>
        );
    };

    return (
        <Switch>
            {routes.map(renderRoute)}

            <Route path={'*'}>
                <p> Not Found </p>
            </Route>
        </Switch>
    )
};

export default Routes;