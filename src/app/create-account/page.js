"use client";//This directive ensures the component runs on the client-side
import { useState } from "react";//Imports the useState hook from React,
import { useRouter } from "next/navigation";// Imports the useRouter hook from Next.js

export default function CreateAccount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || !name) {
            alert("Please fill in email, password, and name.");
            return;
        }

        console.log("Creating account with:", email, password, name);
        router.push("/home"); 
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-8">Create Account</h1>

            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-3/4 sm:w-1/2 md:w-1/3 p-2 border rounded-md shadow-sm"
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-3/4 sm:w-1/2 md:w-1/3 p-2 border rounded-md shadow-sm"
                />

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-3/4 sm:w-1/2 md:w-1/3 p-2 border rounded-md shadow-sm"
                />

                <button type="submit" className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700">
                    Create Account
                </button>
            </form>
        </div>
    );
}
