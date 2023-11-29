//StctRCQNZl8zWbqT
import SignUp from "@/components/Authentification/SignUp";

export default function signUp() {
    return (
        <main>

            <section className="bg-white">
                <div className="flex justify-center min-h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/5"
                         style={{backgroundImage: 'url("https://images.unsplash.com/photo-1604605801370-3396f9bd9cf0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
                    </div>

                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 color = red">
                        <div className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
                                Get your free account now.
                            </h1>

                            <p className="mt-4 text-gray-500">
                                Let’s get you all set up so you can verify your personal account and begin setting up
                                your profile.
                            </p>
                        <SignUp/>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}