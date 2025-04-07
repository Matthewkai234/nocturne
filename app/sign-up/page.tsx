import Link from "next/link";
import { Eye, EyeOff, User, Mail, Lock, AlertCircle } from "lucide-react";
import { CompleteNavigators } from "../components/Navbar&Sidebar/Index";

const SignUpPage: React.FC = () => {

    return (
        <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#040105,#0e030f,#040105)] min-h-screen flex flex-col items-center justify-center px-4">
            <CompleteNavigators />

            {/* Main Content */}
            <div className="relative z-10 h-[calc(100vh-64px)] flex items-center justify-center p-4">
                {/* Glass-morphism Form Container */}
                <div className="w-full max-w-md bg-[#1a1119]/90 backdrop-blur-lg rounded-xl shadow-2xl border border-[#ffffff15] p-6 sm:p-8 transition-all duration-300 hover:shadow-3xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] bg-clip-text text-transparent">
                            Join the Community
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Create your account in seconds
                        </p>
                    </div>

                    <form  className="space-y-5">
                        <div>
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    className={`peer w-full bg-[#00000030] border rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all`}
                                />
                                <label
                                    htmlFor="username"
                                />
                                <User className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 peer-focus:text-[#D4AF37] transition-colors" />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div>
                            <div className="relative group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className={`peer w-full bg-[#00000030] border rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all`}
                                />
                                <label
                                    htmlFor="email"
                                />
                                <Mail className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 peer-focus:text-[#D4AF37] transition-colors" />
                            </div>
                           
                        </div>

                        {/* Password Input */}
                        <div>
                            <div className="relative group">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    className={`peer w-full bg-[#00000030] border  rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all`}
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2.5 peer-focus:text-sm"
                                />
                                
                                <Lock className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 peer-focus:text-[#D4AF37] transition-colors" />
                                
                            </div>
                            
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <div className="relative group">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className={`peer w-full bg-[#00000030] border rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all`}
                                />
                                <label
                                    htmlFor="confirmPassword"
                                />
                                <Lock className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 peer-focus:text-[#D4AF37] transition-colors" />
                        
                            </div>
                            
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                        >
                            Get Started
                        </button>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#ffffff15]"></div>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="px-2 bg-[#1a1119] text-gray-400">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-2 bg-[#ffffff05] hover:bg-[#ffffff10] text-white py-3 px-6 rounded-lg transition-all border border-[#ffffff15]"
                        >
                            <span>Google</span>
                        </button>

                        {/* Login Link */}
                        <p className="text-center text-gray-400 text-sm mt-6">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-[#D4AF37] hover:underline hover:text-[#9b7f20] transition-colors"
                            >
                                Sign in here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
