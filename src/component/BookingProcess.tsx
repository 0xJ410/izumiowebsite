export default function BookingProcessComponent() {
    return <>
    <div>
        <div>
            <div className="h-screen flex sm:flex-col lg:flex-row justify-center items-center gap-10">
                <div>
                    <img src="../img/izumiopics.png" alt="" />
                </div>
                <div className="">
                    <form className="flex flex-col gap-2 " action="" method="post">
                        <p className="font-josefin text-2xl">Sign Up Here!</p>
                        <label className="font-poppins font-extrabold" htmlFor="name">Name: </label>
                        <input className="border-blue border-2 rounded-lg font-poppins p-r05" type="text" name="name" id="" required/>
                        <label className="font-poppins font-extrabold" htmlFor="email">Email: </label>
                        <input className="border-blue border-2 rounded-lg font-poppins p-r05" type="email" name="email" id="" required/>
                        <label className="font-poppins font-extrabold" htmlFor="quantity">Quantity: </label>
                        <input className="border-blue border-2 rounded-lg font-poppins p-r05" type="number" name="quantity" id="" required/>
                        <button className="p-r1 m-5 font-poppins tracking-wider border-2 border-green bg-blue rounded-lg" type="submit">Buy Now</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
    </>
} 