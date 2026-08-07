"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

export default function RegistrationPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Email & Password Signup
  const handleSignUp = async (data) => {
    console.log(data, "form data");
    const { email, name, photo, password } = data;

    setLoading(true);
    try {
      const { data: res, error } = await authClient.signUp.email({
        name: name,
        email: email,
        password: password,
        image: photo,
        callbackURL: "/login",
      });

      console.log(res,error);

       if (error) {
    toast.error(error.message || "Registration failed!");
    return;
  }

  if (res) {
    toast.success("Account created successfully!");
    reset();
    router.push("/login");
  }
} catch (err) {
  console.error("Signup failed:", err);
  toast.error("Registration failed! Please try again.");
} finally {
  setLoading(false);
}
  };

  // Google Signup
  const handleGoogleSignUp = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error("Google signup failed:", error);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative p-4 py-12"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1920&auto=format&fit=crop')`,
      }}
    >
      {/* Background Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-md p-8 sm:p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-white">
        
        {/* Header Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold tracking-wide">
            Create Account
          </h1>
          <h2 className="text-2xl font-bold text-cyan-400 mt-1">
            Clay&Crown
          </h2>
          <p className="text-xs text-gray-200 mt-2 font-light">
            Join us to explore the best tile collections
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          
          {/* Full Name Input */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-100">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Full name is required",
              })}
              placeholder="Enter your full name"
              className="w-full px-4 py-2.5 rounded-md bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Address Input */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-100">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 rounded-md bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-100">
              Password
            </label>
            <div className="relative">
              <input
                type={isShowPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Create a password"
                className="w-full px-4 py-2.5 pr-10 rounded-md bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-600 hover:text-gray-900"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Image URL Input */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-100">
              Image URL <span className="text-xs font-normal text-gray-300">(Optional)</span>
            </label>
            <input
              type="url"
              {...register("photo")}
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2.5 rounded-md bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-2.5 px-4 bg-[#0e6ba8] hover:bg-[#0a5280] text-white font-medium rounded-md text-sm transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Registration"}
            {!loading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 text-center text-xs text-gray-300 font-medium">
          OR
        </div>

        {/* Google Signup Button */}
        <button
          onClick={handleGoogleSignUp}
          type="button"
          className="w-full py-2.5 px-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-md text-sm transition-colors flex items-center justify-center gap-3 shadow-md"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          SignUp With Google
        </button>

        {/* Footer Link */}
        <p className="mt-6 text-center text-xs text-gray-300">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-cyan-400 font-semibold hover:underline ml-1"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}