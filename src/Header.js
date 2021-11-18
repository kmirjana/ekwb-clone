import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className='header__wrapper'>
      <div className='header'>
        <Link to='/'>
          <img src='../logo.jpg ' className='header__logo' alt='EKWB icon' />
        </Link>
        <div className='header__search'>
          <input className='header__searchInput' type='text' />
          <SearchOutlinedIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
          <Link to={!user && "/login"}>
            <>
              <div onClick={handleAuth} className='header__option'>
                <span className='header__optionLineOne'>
                  {user ? "Sign out" : "Sign in"}
                </span>
                <span className='header__optionLineOne'>Order</span>
                <span className='header__optionLineOne'>Whishlist</span>
                <span className='header__optionLineOne'>{cart?.length}</span>
              </div>{" "}
            </>
          </Link>
          <Link to='/checkout'>
            <div className='header__optionCart'>
              <ShoppingCartOutlinedIcon />
              <span className='header__optionLineTwo header__cartCount'></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
