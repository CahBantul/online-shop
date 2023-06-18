import React from "react";
import { Link, usePage } from "@inertiajs/react";
import Container from "@/Components/Container";
import NavLink from "@/Components/NavLink";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Navbar() {
    const { auth } = usePage().props;

    return (
        <nav className="bg-white  border-b py-2">
            <Container>
                <div className="flex justify-between items-center">
                    <ApplicationLogo className="w-8 h-8 fill-red-500" />
                    <div className="flex items-center gap-x-6">
                        <NavLink href="/">Home </NavLink>
                        <NavLink href="/dashboard">Dashboard </NavLink>
                        {auth.user ? (
                            <>
                                 <NavLink href="/profile">{ auth.user.name } </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink href="/login">Login </NavLink>
                                <NavLink href="/register">Register </NavLink>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    );
}
