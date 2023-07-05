import React from "react";
import App from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import Table from "@/Components/Table";
import Card from "@/Components/Card";
import Pagination from "@/Components/Pagination";

export default function Mine(props) {
    const { data: products, meta, links } = props.products;

    return (
        <div>
            <Head title="My Product" />
            <Container>
                <Card>
                    <Card.Header>My Products</Card.Header>
                    <Card.Table>
                        <Table>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th className={"w-0"}>#</Table.Th>
                                    <Table.Th>Product</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {products.length ? (
                                    <>
                                        {products.map((product, i) => (
                                            <Table.Tr key={product.id}>
                                                <Table.Td className={"w-0"}>
                                                    {meta.from + i}
                                                </Table.Td>
                                                <Table.Td>
                                                    <a
                                                        className="text-blue-600 underline"
                                                        href={product.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {product.name}
                                                    </a>
                                                </Table.Td>
                                            </Table.Tr>
                                        ))}
                                    </>
                                ) : (
                                    <Table.Empty colSpan={2}></Table.Empty>
                                )}
                            </Table.Tbody>
                        </Table>
                        <Card.Footer><Pagination meta={meta} links={links} marginTop="mt-0" /></Card.Footer>
                    </Card.Table>
                </Card>
            </Container>
        </div>
    );
}

Mine.layout = (page) => <App children={page} />;
