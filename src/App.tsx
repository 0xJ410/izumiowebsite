import BookingProcess from "./pages/bookprocess";
import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return <>
    <BrowserRouter>
      <Routes>

        <Route index element={ <Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/bookingprocess" element={<BookingProcess />}></Route>

      </Routes>
    
    </BrowserRouter>
  </>
}