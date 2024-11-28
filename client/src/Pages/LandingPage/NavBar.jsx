import { Link } from "react-router"
import MobileNav from "./MobileNav";


const routes = [
  {
    name: "Company",
    href: '/',
  },
  {
    name: "Pricing",
    href: '/',
  },
  {
    name: "Tools",
    href: '/',
  },
  {
    name: "Community",
    href: '/',
  },
]

const NavBar = () => {
  return (
    <>
      <header className="w-full justify-center flex px-2 h-11">
        <div className="flex justify-between items-center w-full max-w-screen-2xl">

          <div>
            Logo
          </div>

          <nav className="invisible md:visible w-full max-w-96 min-w-80">
            <ul className="flex flex-row justify-between">
              {routes.map((route, index) => {
                console.log(route);
                return (
                  <li key={index}>
                    <Link to={route.href}>{route.name}</Link>
                  </li>
                );
              })}

            </ul>
          </nav>

          <div className="flex flex-row gap-1 w-full max-w-48 justify-center invisible md:visible">
            <button
            className="border-solid border-2 border-gray-100 px-3 rounded-md py-[2.5px] shadow-lg"
            onClick={() => console.log("Sign up button clicked!")}
            >
              Sign Up
            </button>
            <button
            className="border-solid border-2 border-transparent px-3 rounded-md  py-[2.5px] shadow-lg bg-[var(--color-primary-red)] text-white"
            onClick={() => console.log('Sign in button clicked!')}
            >
              Sign In
            </button>
          </div>
          <MobileNav />
        </div>
      </header>
    </>
  )
}

export default NavBar
