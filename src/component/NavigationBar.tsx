export function NavigationBar() {
    return <>
    
    <div className="OuterBar">
        <div className="InnerBar">
            <div className="fixed top-0 left-0 right-0 h-auto w-full lg:px-r5 sm:px-r1 flex flex-row items-center bg-blue border-b-2 border-b-green">
                <div className="flex-1">
                    <a className="font-poppins text-xl font-bold text-green tracking-widest" href="">Izumio</a>
                </div>
                <div className="py-r1 flex flex-row sm:gap-3 lg:gap-7">
                    <a className="font-poppins" href="#contactus">Contact Us</a>
                    <a className="font-poppins" href="/bookingprocess">Get Yours!</a>
                </div>
            </div>
        </div>
    </div>
    
    </>
}


export function NavigationBarBookingProcess() {
    return <>
    
    <div className="OuterBar">
        <div className="InnerBar">
            <div className="fixed top-0 left-0 right-0 h-auto w-full lg:px-r5 sm:px-r1 flex flex-row items-center bg-blue border-b-2 border-b-green">
                <div className="flex-1">
                    <a className="font-poppins" href="/home">Back to homepage.</a>
                </div>
                <div className="py-r1 flex flex-row sm:gap-3 lg:gap-7">
                    <a className="font-poppins text-xl font-bold text-green tracking-widest" href="/home">Izumio</a>
                </div>
            </div>
        </div>
    </div>
    
    </>
}