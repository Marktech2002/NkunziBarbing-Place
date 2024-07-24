# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


 {/*  header section */}
      <nav className="font-display relative mx-auto px-2 py-5 w-screen bg-bgColor">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2 ml-10 flex justify-center items-center">
            <div className="text-bgSmall text-3xl mr-1">▼</div>
            <p className="font-semibold text-3xl">NKUNZI</p>
          </div>
          {/* menu items */}
          <div className="hidden text-lg tracking-wider font-bold md:flex space-x-9 pt-3">
            <Link to="/" className="hover:text-grayColor">
              HOME
            </Link>
            <Link to="/" className="hover:text-grayColor">
              SERVICES
            </Link>
            <Link to="/" className="hover:text-grayColor">
              ABOUT
            </Link>
            <Link to="/login" className="hover:text-grayColor">
              LOGIN
            </Link>
            <Link to="/register" className="hover:text-grayColor">
              REGISTER
            </Link>
          </div>
          {/* button */}
          <Link
            to="/destination"
            className="hidden p-3 px-8 pt-2 tracking-wide text-white bg-black baseline hover:bg-grayColor md:block"
          >
            Appointment
          </Link>
        </div>
      </nav>