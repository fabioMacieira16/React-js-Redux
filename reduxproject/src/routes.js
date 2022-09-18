import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/Home/home";
import Reservas from "./pages/Resevas/reserva";

export default function Routes () {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reservas" component={Reservas} />
        </Switch>
    )
}