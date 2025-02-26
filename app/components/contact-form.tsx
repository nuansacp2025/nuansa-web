export default function ContactForm() {
    return (
        <div className="w-full flex flex-col gap-y-4">
            <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact Us</h2>
                <p className="text-md sm:text-lg my-4">Feel free to reach out through the form below!</p>
            </div>
            <form action="#" className="w-full xl:w-8/12">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                        <label htmlFor="first-name" className="text-md sm:text-lg">First Name</label>
                        <div className="mt-2.5">
                            <input id="first-name" type="text" className="block w-full rounded-md border-0 px-2 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="text-md sm:text-lg">Last Name</label>
                        <div className="mt-2.5">
                            <input id="last-name" type="text" className="block w-full rounded-md border-0 px-2 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-md sm:text-lg">Email</label>
                        <div className="mt-2.5"> 
                            <input id="email" type="text" className="block w-full rounded-md border-0 px-2 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone-number" className="text-md sm:text-lg">Phone Number</label>
                        <div className="mt-2.5">
                            <input id="phone-number" type="text" className="block w-full rounded-md border-0 px-2 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none"/>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="message" className="text-md sm:text-lg">Message</label>
                        <div>
                            <textarea id="message" name="message" className="resize-none block w-full rounded-md border-0 px-2 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none"></textarea>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button className="block w-full sm:w-48 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                </div>
            </form>
        </div>
    )
}