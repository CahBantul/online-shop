import { useState } from "react";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";

export default function App({ user, header, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <Toaster position="top-center" reverseOrder={false} />
            <main className="py-12">{children}</main>
        </div>
    );
}
