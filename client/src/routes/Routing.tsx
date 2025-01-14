
import { BrowserRouter as Router, Route, Routes, } from "react-router";


//Auth Components


//404 Error


//Main Pages
import Home from "../pages/Home/Home"

//components
import Navbar from "../Layout/Navbar/Navbar";




const Routing = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}
export default Routing
