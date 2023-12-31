import Container from '@/Components/Container'
import App from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Home() {
  return (
    <div>
         <Head title="Home" />
        <Container>Home</Container>
    </div>
  )
}

Home.layout  = page => <App children={page} />
