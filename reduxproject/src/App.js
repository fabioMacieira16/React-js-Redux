import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Header from "./components/Header/header";
import Routes from "./routes";

export default function App() {
  return (
   <BrowserRouter>
   <Header />
    <Routes />
   </BrowserRouter>
  );
}
