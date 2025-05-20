import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";
const Header = ({ text, changeText, getMovie }) => {
  const Location = useLocation();
  const isHome = Location.pathname === "/"
  return (
    <>
      <nav className="bg-gray-800 w-full p-5 h-auto mb-6">
        <div className="mx-auto">
          <div className="flex justify-between align-items-center ">
            <div>
              <Link to="/" className="text-white text-2xl">
                Movie Hunt
              </Link>
            </div>
            {isHome && (
              <div className="w-xl">
                <form action="" onSubmit={getMovie}>
                  <input
                    type="text"
                    className="p-2 w-xl rounded-md"
                    value={text}
                    onChange={changeText}
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header
