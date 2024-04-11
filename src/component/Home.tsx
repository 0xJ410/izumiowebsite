export default function Home() {
    return <>
        <div className="">
            <div className="">
                <div className=" h-screen flex lg:flex-row sm:flex-col-reverse gap-5 sm:pb-r10 sm:pt-r10 lg:p-r10 items-center justify-center bg-sea bg-center bg-no-repeat bg-cover">
                    <div className="flex-1 flex flex-col gap-7">
                        <h1 className="font-josefin sm:text-3xl lg:text-5xl text-center font-extrabold">
                            Izumio Hydrogen Water
                        </h1>
                        <h2 className="font-poppins sm:text-xl lg:text-2xl sm:text-center">
                            Your Gateway to Enhanced Wellness.
                        </h2>
                    </div>
                    <div className="lg:p-r3">
                        <img className="h-auto w-full object-cover" src="../img/izumiopic.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
}