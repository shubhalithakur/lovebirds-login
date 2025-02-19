"use client";//This directive ensures the component runs on the client-side
import Image from "next/image";//This imports the Image component from Next.js
import { useState } from "react";//Imports the useState hook from React,
import { useRouter } from "next/navigation";// Imports the useRouter hook from Next.js

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router =useRouter();
  // const navigate=(name)=>{
  //   router.push(name);//Defines a helper function navigate to 
  //   // handle navigation to different routes using router.push()
  // }
    
{/* function, which is triggered on form submission */}
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password."); 
      return; 
    }

    console.log("Logging in with:", email, password);
    router.push("/home"); 
  };

  return (
    <div className="w-full h-screen max-w-screen-lg mx-auto flex items-center justify-center overflow-y-scroll">
     

      <div className="w-full h-full md:w-1/2 flex flex-col justify-center items-center bg-green-200 p-10 text-center">
        <Image src="/image1-removebg-preview.png" width={200} height={200} alt="Lovebirds Logo" />
        <h2 className="text-lg font-semibold mt-5 text-gray-700">Maecenas mattis egestas</h2>
        <p className="text-gray-600 mt-2">Erdum et malesuada fames ac ante ipsum primis in faucibus.</p>
      </div>

   
      <div className="w-full h-screen md:w-1/2 flex flex-col justify-center items-center bg-white p-5 mt-16 md:mt-0
      max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <h1 className="text-xl text-gray-900">Lovebirds</h1>

        <form onSubmit={handleSubmit} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h2 className="text-lg text-center text-gray-600 font-serif ">Welcome to Lovebirds</h2>

       
          <div className="mb-2">
            <label className="block text-gray-700 text-sm ">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="shubhali@123example.com"
              className="w-full h-10 mt-1 px-4 py-2 border rounded-lg 
              hover:border-green-500 focus:border-green-600
              focus:ring-2 focus:ring-green-300 transition-all duration-500"
              required
            />
          </div>

          
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full h-10 mt-1 px-4 py-2 border rounded-lg
              hover:border-green-500 focus:border-green-600
              focus:ring-2 focus:ring-green-300 transition-all duration-500"
              required
            />
          </div>

    
          <div className="flex justify-between items-center text-sm">
            <button
              type="button"
              onClick={() => router.push("/forgot")}
              className="text-gray-500 hover:text-green-500 hover:underline transition-all duration-300">
              Forgot password?
            </button>
          </div>


          <button 
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg mt-2
             hover:bg-green-400 transition-all duration-500">
            Sign in
          </button>


          <div className="text-center my-2 text-gray-500">or</div>

         
          <button
            className="w-full flex gap-3 items-center justify-center 
            border py-1 rounded-lg hover:bg-gray-100 transition-all duration-500"
          >
            <Image src="/google.png" width={24} height={24} alt="Google Login"
             className="transition-transform duration-500 hover:scale-110" />
            Sign in with Google
          </button>

          
          <p className="text-center text-gray-600 mt-2">
            New to Lovebirds?
            <a href="#" className="text-green-600 hover:underline">
              Create Account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}





