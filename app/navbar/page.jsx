export default function Navbar() {
  return (
    <div className="navbar bg-black mb-10 py-5 sticky ">
      <div className="w-1/5 ...">
        <a className="btn btn-ghost normal-case text-xl">
          <h1 className="text-2xl font-bold text-center  text-yellow-400">
            LATEST MOVIES
          </h1>
        </a>
      </div>
      <div className=" flex justify-center ... w-3/5 ...  ">
        <div className="form-control ">
          <div className="input-group ">
            <input
              type="text"
              className="lg:pr-80 ... pl-4 ... placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-xl"
              placeholder="Search for a movie . . . "
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/5 ... flex justify-end ...  mr-4 ...">
        <button className="btn btn-warning text-lg px-8 ...">Sing In</button>
      </div>
    </div>
  );
}
