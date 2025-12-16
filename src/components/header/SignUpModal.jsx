import { Eye, EyeOff } from "lucide-react";
import PropTypes from "prop-types";

const SignUpModal = ({ closeModal, showPassword, setShowPassword }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-[400px] mx-auto w-full relative">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Sign Up</h2>
        <button onClick={closeModal}>X</button>
      </div>

      <p className="text-gray-400 mb-4">Create a new account</p>

      <form className="mt-10">
        <label className="font-semibold">Your Name</label>
        <input
          type="text"
          placeholder="Your name"
          className="border w-full px-4 py-2 mb-2" />

        <label className="font-semibold">Your Email</label>
        <input
          type="email"
          placeholder="Your email"
          className="border w-full px-4 py-2 mb-2" />

        <label className="font-semibold">Your Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your password"
            className="border w-full px-4 py-2"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        <button className="bg-black text-white w-full mt-4 py-3 rounded-lg">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUpModal;

SignUpModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    showPassword: PropTypes.bool.isRequired,
    setShowPassword: PropTypes.func.isRequired,
};