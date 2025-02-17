import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex  w-full">
    


      <div className="w-1/2 bg-green-200 flex flex-col justify-center items-center p-10">
        <Image
          src="/image1-removebg-preview.png" 
          width={300}
          height={300}
          alt="Lovebirds"
        />
        <h2 className="text-lg font-semibold mt-5 text-gray-600">Maecenas mattis egestas</h2>
        <p className="text-center text-gray-500 mt-2">
          Erdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>

    

      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <h1 className="text-2xl font-extrabold italic mb-20"> Lovebirds</h1>

        <form className="w-full  max-w-sm">
          <h2 className="text-l text-center text-gray-500 font-[serif] mb-5">Welcome to Lovebirds</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-m">Username or Email</label>
            <input
              type="text"
              placeholder="shubhali"
              className="w-full mt-1 px-4 py-2 border rounded-lg 
              hover:border-green-500 focus:border-green-600
              focus:ring-2 focus:ring-green-300 "
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-m">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-1 px-4 py-2 border rounded-lg
              hover:border-green-500 focus:border-green-600
              focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-gray-500 hover:text-green-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg mt-4 hover:bg-green-400">Sign in</button>

          <div className="text-center my-4 text-gray-500 hover:text-green-400">or</div>

          <button className="w-full flex items-center justify-center border py-2 rounded-lg">
            Sign in with Google
          </button>

          <p className="text-center text-gray-600 mt-4 hover:text-red-400">
            New Lovebirds? 
          <a href="#" className="text-green-600 hover:underline">Create Account</a>
          </p>
        </form>
      </div>
    </div>
  );
}
