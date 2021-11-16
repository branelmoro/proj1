import React from "react";
import { Provider } from "react-redux";

import { Switch, Route } from "react-router-dom";
import routes from "../routes";

export default ({ store }) => (
    <Provider store={store}>
        <Switch>
            {
                routes.map(({ path, exact, component: C, ...rest }) => (
                    <Route key={path}
                        path={path}
                        exact={exact}
                        render={(props) => (
                            <C {...props} {...rest} />
                        )}
                    />
                ))
            }
        </Switch>
    </Provider>
);
