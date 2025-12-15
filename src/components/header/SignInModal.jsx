import { Eye, EyeOff } from "lucide-react";
import PropTypes from "prop-types";

const SignInModal = ({ closeModal, showPassword, setShowPassword }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-[400px] mx-auto w-full relative text-black">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Sign In</h2>
        <button onClick={closeModal}>X</button>
      </div>

      <p className="text-gray-400 mb-4">Malesuada egestas nunc vestibulum</p>

      <form className="mt-10">
        <label className="font-semibold">Your email</label>
        <input
          type="email"
          placeholder="Your email"
          className="border w-full px-4 py-2 mb-2" 
        />

        <label className="font-semibold">Your password</label>
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
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignInModal;

SignInModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    showPassword: PropTypes.bool.isRequired,
    setShowPassword: PropTypes.func.isRequired,
};