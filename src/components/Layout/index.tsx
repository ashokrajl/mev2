import Head from "next/head";

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Ashok&lsquo;s Portfolio</title>
        <meta
          name="description"
          content="A Full Stack Developer, who loves to create web/mobile apps, skilled in TypeScript, React, Node, SASS, Grap3hQL, etc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="py-2 px-2 lg:mx-4 xl:mx-12 ">
          <div className="">
            <nav className="flex items-center justify-between flex-wrap  ">
              <div className="flex items-center flex-no-shrink text-white mr-6 ">
                <img
                  src="https://nemtroutes.com/img/logo/logo.png"
                  alt=""
                  className="h-12 xl:h-20  mr-2  "
                />
              </div>
              <div className="block lg:hidden">
                <button className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                  <svg
                    className="fill-current h-6 w-6 text-gray-700"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <div
                id="main-nav"
                className="w-full flex-grow lg:flex items-center lg:w-auto hidden justify-end "
              >
                <div className="text-sm mt-2 animated jackinthebox xl:mx-8">
                  <a
                    href="#home"
                    className="block lg:inline-block text-md font-bold  text-orange-500  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                  >
                    Home
                  </a>
                  <a
                    href="#tech"
                    className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                  >
                    Tech Stack
                  </a>
                  <a
                    href="#highlights"
                    className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                  >
                    Highlights
                  </a>
                  <a
                    href="#experience"
                    className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                  >
                    Experience
                  </a>
                  <a
                    href="#snaps"
                    className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                  >
                    Snapshots
                  </a>
                  <a
                    href="#contact"
                    className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                  >
                    Contact
                  </a>
                </div>
                <div className="text-2xl my-1 mx-3">
                  <img src="img/shopping.png" className="h-6" alt="" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div
        data-testid="container"
        className="lg:h-screen sm:mt-10 lg:-mt-12 h-full w-full flex flex-col justify-center items-center"
      >
        <div className="w-10/12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-2/6 bg-white shadow-xl rounded-lg overflow-hidden mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
