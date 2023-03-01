import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import jwtDecode from 'jwt-decode';

import Header from "../components/Header";
const Home = () => {
  const { user } = useContext(AuthContext);
    const token = localStorage.getItem('authTokens');
  if (token) {
    const decoded = jwtDecode(token);
    var user_id = decoded.user_id;
    var username = decoded.username;
    var image = decoded.image;
    var full_name = decoded.full_name;
  }
  return (
    
    <>
    <Header />
        <main role="main">
        {/* Main jumbotron for a primary marketing message or call to action */}
        <div className="jumbotron">
            <div className="container">
                {token === null && 
                <>
                    <h1 className="display-3">Hello, world!</h1>
                </>
                }
                 {token !== null && 
                <>
                    <h1 className="display-3">Hello {username}!</h1> 
                </>
                }
            <p>
                This is a template for a simple marketing or informational website. It
                includes a large callout called a jumbotron and three supporting pieces
                of content. Use it as a starting point to create something more unique.
            </p>
            <p>
                <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more »
                </a>
            </p>
            </div>
        </div>
        <div className="container">
            {/* Example row of columns */}
            <div className="row">
            <div className="col-md-4">
                <h2>Heading</h2>
                <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Etiam porta sem malesuada magna mollis
                euismod. Donec sed odio dui.{" "}
                </p>
                <p>
                <a className="btn btn-secondary" href="#" role="button">
                    View details »
                </a>
                </p>
            </div>
            <div className="col-md-4">
                <h2>Heading</h2>
                <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Etiam porta sem malesuada magna mollis
                euismod. Donec sed odio dui.{" "}
                </p>
                <p>
                <a className="btn btn-secondary" href="#" role="button">
                    View details »
                </a>
                </p>
            </div>
            <div className="col-md-4">
                <h2>Heading</h2>
                <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas
                eget quam. Vestibulum id ligula porta felis euismod semper. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus.
                </p>
                <p>
                <a className="btn btn-secondary" href="#" role="button">
                    View details »
                </a>
                </p>
            </div>
            </div>
            <hr />
        </div>{" "}
        {/* /container */}
        </main>
    </>
  );
};

export default Home;
