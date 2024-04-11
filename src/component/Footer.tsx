export default function Footer() {
    return <>
        <div className="">
            <div className="">
                <div className="bg-green flex sm:flex-col lg:flex-row lg:gap-64 lg:px-5 sm:px-r1 py-r1 justify-center items-center">
                    <div className="text-center">
                        <h4 className="font-poppins text-lg" id="contactus">Contact Us!</h4>
                        <div className="flex flex-col justify-start">
                            <p className="font-poppins"> Email: <span className="font-extrabold tracking-wide">cbbrizuela00@gmail.com</span></p>
                            <p className="font-poppins">Phone Number: <span className="font-extrabold tracking-wider">09171369264</span></p>
                        </div>

                    </div>
                    <div className="">
                        <h4 className="font-poppins text-lg">or message us through:</h4>
                        <div className="flex flex-row justify-center items-center gap-5">
                            <a className="flex flex-col justify-center items-center" href="">
                                <img className="h-auto w-10" src="../img/fb.png" alt="" />
                                <p className="font-poppins">@Izumio</p>
                            </a>
                            <a className="flex flex-col items-center" href="">
                                <img className="h-auto w-10" src="../img/insta.png" alt="" />
                                <p className="font-poppins">@Izumio</p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
}