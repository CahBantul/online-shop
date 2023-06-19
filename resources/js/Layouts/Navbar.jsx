import React from "react";
import { usePage } from "@inertiajs/react";
import Container from "@/Components/Container";
import NavLink from "@/Components/NavLink";
import ApplicationLogo from "@/Components/ApplicationLogo";
import DropdownMenu from "@/Components/DropdownMenu";

export default function Navbar() {
    const { auth } = usePage().props;

    return (
        <nav className="bg-white  border-b py-2">
            <Container>
                <div className="flex justify-between items-center">
                    <ApplicationLogo className="w-8 h-8 fill-red-500" />
                    <div className="flex items-center gap-x-6">
                        <NavLink href="/">Home </NavLink>
                        <NavLink href="/products">Products </NavLink>
                        {auth.user ? (
                            <>
                                <DropdownMenu label={auth.user.name}>
                                    <DropdownMenu.Link href={"/dashboard"}>Dashboard</DropdownMenu.Link>
                                    <DropdownMenu.Link href={"/profile"}>Profile</DropdownMenu.Link>
                                    <DropdownMenu.Link href={"/cart"}>Your Cart</DropdownMenu.Link>
                                    <DropdownMenu.Link href={"/history"}>Your History</DropdownMenu.Link>
                                    <DropdownMenu.Link href="/logout" method="post">Logout </DropdownMenu.Link>
                                </DropdownMenu>
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
