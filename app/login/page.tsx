"use client"

// import Image from 'next/image'
// import Link from 'next/link'

// const LoginPage = () => {
//   return (
//     <div className="bg-gray-100 h-[700px] flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
//         {/* Logo Section */}
//         <div className="flex justify-center mb-6">
//           <Image
//             src="/assets/logo.png" // Logo ka path
//             alt="Nike Logo"
//             width={96}
//             height={96}
//             className="w-24 h-24"
//           />
//         </div>

//         {/* Heading Text */}
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           YOUR ACCOUNT FOR EVERYTHING NIKE
//         </h2>

//         {/* Email Input */}
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//         />

//         {/* Password Input */}
//         <input
//           type="password"
//           placeholder="Enter your password"
//           className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//         />

//         {/* Forgotten Password Link */}
//         <div className="text-right mb-6">
//           <Link href="#" className="text-sm text-black hover:underline">
//             Forgotten Password
//           </Link>
//           <p className="text-center mt-5">By Logging in you agree to Nike <span className="underline"> Privacy Policy and terms of Use</span></p>
//         </div>

//         {/* Sign In Button */}
//         <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
//           Sign In
//         </button>

//         {/* Not a Member Link */}
//         <p className="mt-4 text-center">
//           <span>Not a member </span>
//           <Link href="#" className="text-blue-600 hover:underline">
//             Join In
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default LoginPage





import Image from "next/image";
import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const LoginPage = () => {
  const { isSignedIn } = useUser(); // Clerk ka hook for authentication

  return (
    <div className="bg-gray-100 h-[700px] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/logo.png"
            alt="Nike Logo"
            width={96}
            height={96}
            className="w-24 h-24"
          />
        </div>

        {/* Heading Text */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>

        {/* User Signed In */}
        {isSignedIn ? (
          <div className="text-center">
            <p className="text-green-600 text-lg">🎉 Welcome back! You are signed in.</p>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          // User Signed Out
          <>
            {/* Sign In Button */}
            <div className="flex justify-center">
              <SignInButton mode="modal">
                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Sign In
                </button>
              </SignInButton>
            </div>

            {/* Forgotten Password + Policy */}
            <div className="text-right mb-6 mt-4">
              <Link href="#" className="text-sm text-black hover:underline">
                Forgotten Password
              </Link>
              <p className="text-center mt-5">
                By Logging in you agree to Nike{" "}
                <span className="underline">Privacy Policy and Terms of Use</span>
              </p>
            </div>

            {/* Not a Member Link */}
            <p className="mt-4 text-center">
              <span>Not a member? </span>
              <Link href="/sign-up" className="text-blue-600 hover:underline">
                Join In
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
