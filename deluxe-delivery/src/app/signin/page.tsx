import Logo from "@/components/Logo/Logo";

export default function signIn() {
    return (
        <main>

            <div className="bg-[#FFFFFF]">
                <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/3"
                         style={{backgroundImage: 'url("https://images.unsplash.com/photo-1614018453562-77f6180ce036?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-2xl font-bold text-white sm:text-3xl">Deluxe Delivery</h2>

                                <p className="max-w-xl mt-3 text-gray-300">
                                    A seamless delivery service brings the world to your doorstep with a few clicks.
                                    It connects you to a plethora of options, ensuring swift and reliable
                                    deliveries tailored to your preferences. Discover a digital gateway where
                                    convenience meets endless choices, making life just a bit easier, one delivery at a time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1  bg-white p-10 rounded-xl">
                            <div className="text-center">
                                <div className="flex justify-center mx-auto">
                                    <Logo height={58} width={58} />
                                </div>

                                <p className="mt-3 text-gray-500">Sign in to access your account</p>
                            </div>

                            <div className="mt-8">
                                <form>
                                    <div>
                                        <label htmlFor="email"
                                               className="block mb-2 text-sm text-gray-600">Email
                                            Address</label>
                                        <input type="email" name="email" id="email" placeholder="example@example.com"
                                               className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password"
                                                   className="text-sm text-gray-600">Password</label>
                                        </div>

                                        <input type="password" name="password" id="password" placeholder="Your Password"
                                               className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#5752DA] rounded-lg hover:bg-[#5752DA] focus:outline-none focus:bg-[#5752DA] focus:ring focus:ring-[#5752DA] focus:ring-opacity-50">
                                            Sign in
                                        </button>
                                    </div>

                                </form>

                                <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a
                                    href="signup"
                                    className="text-blue-500 focus:outline-none focus:underline hover:underline">
                                    Sign up
                                </a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    )
}
