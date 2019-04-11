import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main/inxex';
import Box from './pages/Box';

// Como as rotas iram se comportar
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box/:id" component={Box} />
        </Switch>
    </BrowserRouter>
);

export default Router;