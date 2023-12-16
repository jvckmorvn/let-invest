import NavbarInputs from "./NavbarInputs";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <div className="ml-2 overflow-hidden rounded">
          <a href="/">
            <img src="/logo.png" alt="logo" height={80} width={80} />
          </a>
        </div>
      </div>
      <div className="navbar-end">
        <NavbarInputs />
      </div>
    </div>
  );
}
