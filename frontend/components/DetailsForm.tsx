function DetailsForm() {
  return (
    <div className="flex flex-col gap-9">
      <h1 className="text-2xl text-center">Enter your details</h1>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight outline-none bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              required={true}
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight outline-none bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              required={true}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-shop-name"
            >
              Shop Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight outline-none bg-white focus:border-gray-500"
              id="grid-shop-name"
              type="text"
              placeholder="Umesh Faluda Corner"
              required={true}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-mobile-number"
            >
              Mobile Number
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight outline-none bg-white focus:border-gray-500"
              id="grid-mobile-number"
              type="text"
              placeholder="7xxxxxx30x"
              required={true}
            />
          </div>
        </div>
        <div className="flex w-full">
          <button
            className="w-full bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default DetailsForm;
