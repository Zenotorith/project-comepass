const FeedbackForm = () => {
    return (
        <form className="max-w-lg mx-auto p-10 bg-sky-50 rounded">
            <div className="mb-4">
                <label htmlFor="name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Name
                </label>
                <input id="name" type="text" placeholder="John Doe" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Phone Number
                </label>
                <input id='phone' type="text" placeholder="09xxx" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                </label>
                <input id="email" type="email" placeholder="example@example.com" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Description
                </label>
                <textarea id="description" rows={4} placeholder="Enter your description here" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default FeedbackForm