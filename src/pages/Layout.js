import React from "react";
import { Outlet,Link, useNavigate} from "react-router-dom";
import './layout.css'


const Layout = () => {
  // Assume you have a state to track whether the user is logged in
  const isLoggedIn = true; // Set this value based on your authentication logic

  // Navigation function
  const navigate = useNavigate();

  // Logout function (you should implement this based on your authentication logic)
  const handleLogout = () => {
    // Implement logout logic here
    // For example, clearing user session, removing tokens, etc.
    // Then redirect to the home page
    navigate("/");
  };

  return (
    <div class="layout">
      <Link to='/' class='title'>
      <h1 class='title'>AZURE GAMES</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn && (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">Cart</Link>
          </>
        )}
        <Link to="/about">About</Link>
        {isLoggedIn?(<button onClick={handleLogout}>Logout</button>)
        :(<>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          </>
        )}
        
      </nav>
      <Outlet/>
    </div>
  );
};

export default Layout;
