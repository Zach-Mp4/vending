import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Lays from "./Lays";
import Main from "./Main";
import Baja from "./Baja";
import Reeces from "./Reeces";


function VendingMachine() {
    return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/lays" element={<Lays/>} />
        <Route path="/baja" element={<Baja/>} />
        <Route path="/reeces" element={<Reeces/>} />
    </Routes>
    </BrowserRouter>
    )
}

export default VendingMachine;