import Container from '@/Components/Container';
import App from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <>
            <Head title="Dashboard" />
            <Container>Dashboard</Container>
        </>
    );
}

Dashboard.layout = page => <App children={page} />