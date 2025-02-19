"use client"
import {useRouter} from 'next/navigation'

export default function ForgotPasswordPage() {
    
    const [email, setEmail] = useState("");// to store the user's input
    const router = useRouter();//navigation between pages
    
    
const handleReset = (e) => {
    e.preventDefault();//Prevents the default form submission behavior
   
    //If the email field is empty, it alerts the user
    if (!email) {
        alert("Please enter your email.");
        return;
    }
    alert("Password reset link sent to " + email);// sending a password reset link
        router.push("/");
    };

return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-semibold text-gray-700 text-center">Reset Password</h2>
    <p className="text-gray-500 text-center">Enter your email to receive a password reset link.</p>
    <form onSubmit={handleReset} className="mt-4">
    <label className="block text-gray-700 text-sm">Email</label>
    <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="shubhali@gmail.com"
        className="w-full h-10 mt-1 px-4 py-2 border rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-300 transition-all duration-500"
        required
                />
    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600 transition-all duration-500">
        Send Reset Link
    </button>
    <button
        type="button"
        onClick={() => router.push("/")}
        className="w-full text-gray-500 mt-2 hover:text-green-500 hover:underline text-center">
        Back to Login
    </button>
    </form>
    </div>
    </div>
    );
}