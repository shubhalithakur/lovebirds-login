"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleReset = (e) => {
        e.preventDefault();

        if (!email) {
            alert("Please enter your email.");
            return;
        }

        alert("Password reset link sent to " + email);
        router.push("/");
        router.refresh();
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">Reset Password</h2>
                <p className="text-gray-500 text-center">Enter your email to receive a password reset link.</p>
                <form onSubmit={handleReset} className="mt-4">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@example.com" className="w-full h-10 mt-1 px-4 py-2 border rounded-lg" required />
                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg mt-4">
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
}
