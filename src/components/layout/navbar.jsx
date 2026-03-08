import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import UserDropdown from "./userDropdown";


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`w-full sticky top-0 z-50 flex justify-between items-center py-5 px-6 md:px-12 transition-all duration-300
            ${scrolled ? "backdrop-blur-lg bg-white/60 shadow-sm" : "bg-transparent"}
            `}
        >
            <Link to={'/'} className="text-2xl font-bold text-third">ShaadiBio</Link>

            {!token ? (
                <div className="space-x-4">
                    <Link to="/login">
                        <Button variant="outline">Login</Button>
                    </Link>

                    <Link to="/register">
                        <Button>Create Account</Button>
                    </Link>
                </div>
            ) : (
                <UserDropdown/>
            )}
        </div>
    );
};

export default Navbar;