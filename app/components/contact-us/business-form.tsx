export default function BusinessForm() {
    return (
        <div className="w-full flex flex-col gap-y-4">
            <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact Us</h2>
                <p className="text-md sm:text-lg my-4">Feel free to reach out through the form below!</p>
            </div>
            <form action="#" className="w-full">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div className="col-span-2">
                        <label htmlFor="name" className="text-md sm:text-lg">Name</label>
                        <input type="text" id="name" name="name" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="email" className="text-md sm:text-lg">Email</label>
                        <input type="text" id="email" name="email" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="phone-number" className="text-md sm:text-lg">Phone Number</label>
                        <input type="text" id="phone-number" name="phone-number" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="category" className="text-md sm:text-lg">Category</label>
                        <select id="category" name="category" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
                            <option value="ticket-enquiries">Ticket Enquiries</option>
                            <option value="sponsorship-enquiries">Sponsorship Enquiries</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                    <label htmlFor="proposal" className="text-md sm:text-lg">Corporate Proposal (PDF)</label>
                        <input type="file" id="proposal" name="proposal" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        className="block w-full sm:w-48 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Email
                    </button>
                </div>
            </form>
        </div>
    )
}