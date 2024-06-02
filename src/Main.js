import { Link } from "react-router-dom";

function Main(){
    return (
        <>
        <h1>VENDING MACHINE!!</h1>
        <div><Link to="/lays">LAYS</Link></div>
        <div><Link to="/baja">MTN DEW BAJA BLAST</Link></div>
        <div><Link to="/reeces">REECES</Link></div>
        </>
    )
}

export default Main;
