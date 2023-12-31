import React from "react";
import { usePage } from "@inertiajs/react";
import Container from "@/Components/Container";
import NavLink from "@/Components/NavLink";
import ApplicationLogo from "@/Components/ApplicationLogo";
import DropdownMenu from "@/Components/DropdownMenu";

export default function Navbar() {
    const { auth, categories_global, carts_global_count } = usePage().props;

    return (
        <nav className="bg-white  border-b py-2">
            <Container>
                <div className="flex justify-between items-center">
                    <ApplicationLogo className="w-8 h-8 fill-red-500" />
                    <div className="flex items-center gap-x-6">
                        <NavLink href="/products">Home </NavLink>
                        <DropdownMenu label={"Categories"}>
                            {categories_global.map((category) => (
                                <DropdownMenu.Link
                                    key={category.slug}
                                    href={`/products?category=${category.slug}`}
                                >
                                    {category.name}
                                </DropdownMenu.Link>
                            ))}
                        </DropdownMenu>
                        {auth.user ? (
                            <>
                                <DropdownMenu label={auth.user.name}>
                                    <DropdownMenu.Link href={"/cart"}>
                                        Your Cart
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link href={"/products/me"}>
                                        Your Products
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link
                                        href="/logout"
                                        method="post"
                                    >
                                        Logout{" "}
                                    </DropdownMenu.Link>
                                </DropdownMenu>
                                <NavLink className="flex items-center gap-x-2" href='/carts'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                        />
                                    </svg>
                                    {carts_global_count}
                                </NavLink>
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
