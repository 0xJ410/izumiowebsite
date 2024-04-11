import BookingProcessComponent from "../component/BookingProcess";
import Footer from "../component/Footer";
import { NavigationBarBookingProcess } from "../component/NavigationBar";

export default function BookingProcess() {
    return <>
    <NavigationBarBookingProcess></NavigationBarBookingProcess>
    <BookingProcessComponent></BookingProcessComponent>
    </>
}