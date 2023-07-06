import React from "react";
import App from "@/Layouts/AppLayout";
import { Head, Link, router } from "@inertiajs/react";
import { numberFormat } from "@/Libs/helper";
import PrimaryButton from "@/Components/PrimaryButton";
import Container from "@/Components/Container";
import { toast } from "react-hot-toast";

export default function Show({ product, auth, isProductBought }) {
    const addToCart = () => {
        router.post(
            route("cart.store", product),
            {},
            {
                onSuccess: () => toast.success("Added to cart"),
            }
        );
    };
    return (
        <div>
            <Head title={product.name} />
            <Container>
                <div className="flex gap-10">
                    <div className="w-1/3">
                        <img className="w-full" src={product.picture} alt="" />
                    </div>
                    <div className="w-2/3 min-h-full flex flex-col justify-between">
                        <div className="flex-1">
                            <Link
                                href={`/products?category=${product.category.slug}`}
                                className="text-xs font-semibold px-2 py-1 inline-flex bg-blue-500 text-white rounded"
                            >
                                {product.category.name}
                            </Link>
                            <h1 className="text-3xl font-semibold">
                                {product.name}
                            </h1>
                            <div className="leading-relaxed text-gray-500 my-4">
                                {product.description}
                            </div>
                            <div className="font-semibold text-4xl">
                                <sup>Rp</sup> {numberFormat(product.price)}
                            </div>
                        </div>
                        {auth.user ? (
                            <>
                                {isProductBought ? (
                                    <PrimaryButton>
                                        <Link href={"/products/me"}>
                                            Already Bought
                                        </Link>
                                    </PrimaryButton>
                                ) : (
                                    <PrimaryButton onClick={addToCart}>
                                        Add to Card
                                    </PrimaryButton>
                                )}
                            </>
                        ) : (
                            <PrimaryButton onClick={addToCart}>
                                Add to Card
                            </PrimaryButton>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
