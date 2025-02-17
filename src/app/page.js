import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Side (Image & Info) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-green-200 p-10">
        <Image src="/image1-removebg-preview.png" width={300} height={300} alt="Lovebirds" />
        <h2 className="text-lg font-semibold mt-5 text-gray-600 text-center">Maecenas mattis egestas</h2>
        <p className="text-center text-gray-500 mt-2">Erdum et malesuada fames ac ante ipsum primis in faucibus.</p>
      </div>

      {/* Right Side (Login Form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <h1 className="text-2xl font-extrabold italic mb-10 md:mb-20">Lovebirds</h1>

        <form className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h2 className="text-lg text-center text-gray-500 font-serif mb-5">Welcome to Lovebirds</h2>

          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-m">Username or Email</label>
            <input
              type="text"
              placeholder="shubhali"
              className="w-full mt-1 px-4 py-2 border rounded-lg hover:border-green-500 focus:border-green-600 focus:ring-2 focus:ring-green-300 transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-m">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-1 px-4 py-2 border rounded-lg hover:border-green-500 focus:border-green-600 focus:ring-2 focus:ring-green-300 transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-gray-500 hover:text-green-500 hover:underline transition-all duration-500 ease-in-out">
              Forgot password?
            </a>
          </div>

          {/* Sign-in Button */}
          <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-lg mt-4 hover:bg-green-400 transition-all duration-500 ease-in-out">
            Sign in
          </button>

          <div className="text-center my-4 text-gray-500 hover:text-green-400 transition duration-200">or</div>

          {/* Google Sign-in Button */}
          <button className="w-full flex gap-5 items-center justify-center border py-2 rounded-lg hover:bg-gray-300 transition-all duration-500 ease-in-out">
            <Image src="/google.png" width={30} height={30} alt="Google Login" className="transition-transform duration-500 ease-in-out hover:scale-125" />
            Sign in with Google
          </button>

          {/* Create Account Link */}
          <p className="text-center text-gray-600 mt-4 hover:text-red-400 transition-all duration-500 ease-in-out">
            New Lovebirds? <a href="#" className="text-green-600 hover:underline">Create Account</a>
          </p>
        </form>
      </div>
    </div>
  );
}
