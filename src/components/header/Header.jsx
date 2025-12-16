import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const closeModal = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
    setShowPassword(false);
  };

  return (
    <div>
      <header className={`border-b border-black px-4`}>
        <div className="container mx-auto max-w-full w-[1100px] flex items-center justify-between py-4 text-[16px]">
          <div className="flex items-center gap-4">
            <img src="/Logo (1).svg" alt="Logo" className="h-8 w-auto" />

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="w-6 h-6" />
            </button>

            <nav className="hidden md:flex space-x-6">
              <Link to="/">Home</Link>
              <Link to="/about">About us</Link>
            </nav>
          </div>
          

          <div className="flex items-center space-x-4">
            <button onClick={() => setIsSignInOpen(true)}>
              Sign In
            </button>
            <button onClick={() => setIsSignUpOpen(true)} className="bg-black text-white px-4 py-2 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {(isSignInOpen || isSignUpOpen) && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-[0.4rem] bg-opacity-90 flex items-center justify-center z-50">
          {isSignInOpen && (
            <SignInModal
              closeModal={closeModal}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}

          {isSignUpOpen && (
            <SignUpModal
              closeModal={closeModal}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;