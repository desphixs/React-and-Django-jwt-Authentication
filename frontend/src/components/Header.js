import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import jwtDecode from 'jwt-decode';

function Header() {
  const { user, logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem('authTokens');
  if (token) {
    const decoded = jwtDecode(token);
    var user_id = decoded.user_id;
  }
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand">
                <img
                    style={{ width: 100, height: 60, objectFit: "contain" }}
                    src="https://i.imgur.com/juL1aAc.png"
                    alt=""
                />
            </a>
        <form className="form-inline">
            <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            />
            {token === null &&
            <>
            <Link className="btn btn-primary ms-2 mr-2 my-2 my-sm-0" to={'/register'}>Sign Up</Link>
            </>
            }
            {token === null &&
            <>
            <Link className="btn btn-success my-2 my-sm-0" to={'/login'}>Login</Link>
            </>
            }

            {token !== null &&
            <>
            <Link className="btn btn-secondary my-2 mr-2 my-sm-0" to="/protected">Dashboard</Link>
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={logoutUser}>Logout</button>
            </>
            }
        </form>
        </nav>



    </div>
  )
}

export default Header