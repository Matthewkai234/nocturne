import Link from "next/link";
import { Mail, Lock, Moon } from "lucide-react";
import { CompleteNavigators } from "../components/Navbar&Sidebar/Index";
import { Google } from "../utils/brands";

const LoginPage: React.FC = () => {
    return (
        <>
            <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#040105,#0e030f,#040105)] text-white relative overflow-hidden flex flex-col">
                <CompleteNavigators />

                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="w-full max-w-md bg-[#1a1119]/90 backdrop-blur-lg rounded-xl shadow-2xl border border-[#ffffff15] p-6 sm:p-8 transition-all duration-300 hover:shadow-3xl">
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <Moon className="h-10 w-10 text-[#ffffff] transform group-hover:rotate-12 transition-transform" />
                                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] bg-clip-text text-transparent">
                                    Welcome Back
                                </h2>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Unlock your mystical journey
                            </p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        className="peer w-full bg-[#00000030] border rounded-lg py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2.5 peer-focus:text-sm"
                                    ></label>
                                    <Mail className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 peer-focus:text-[#D4AF37] transition-colors" />
                                </div>
                            </div>

                            <div>
                                <div className="relative group">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        className="peer w-full bg-[#00000030] border rounded-lg py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2.5 peer-focus:text-sm"
                                    ></label>
                                    <Lock className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 peer-focus:text-[#D4AF37] transition-colors" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 text-[#D4AF37] bg-[#00000030] border-[#ffffff30] rounded focus:ring-[#D4AF37]"
                                    />
                                    <span className="text-gray-400 text-sm">
                                        Remember me
                                    </span>
                                </label>
                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-[#D4AF37] hover:text-[#9b7f20] transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                            >
                                Sign In
                            </button>

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

                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 bg-[#ffffff05] hover:bg-[#ffffff10] text-white py-3 px-6 rounded-lg transition-all border border-[#ffffff15]"
                            >
                                <Google />
                                <span>Google</span>
                            </button>

                            <p className="text-center text-gray-400 text-sm mt-6">
                                New to the realm?{" "}
                                <Link
                                    href="/sign-up"
                                    className="text-[#D4AF37] hover:underline hover:text-[#9b7f20] transition-colors"
                                >
                                    Create account
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
