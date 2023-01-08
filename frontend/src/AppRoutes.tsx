import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import FlashBook from "./pages/FlashBook"
import Links from "./pages/Links"
import Shop from "./pages/Shop"

const AppRoutes = () => {
    
    return (
        <>
            <NavBar />

            <Routes>
                {/* Set default route */}
                <Route path="/" element={<Navigate to="/flashbook"/>}/>

                {/* Set application route */}
                <Route path="/flashbook" element={<FlashBook />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/links" element={<Links />}></Route>
            </Routes>    
        </>

    )
}

export default AppRoutes