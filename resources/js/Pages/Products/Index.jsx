import React from 'react'
import App from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import Container from '@/Components/Container'
import ProductItem from '@/Components/ProductItem'
import Header from '@/Components/Header'
import Pagination from '@/Components/PAgination'

export default function Index(props) {
  const {data: products, meta, links} = props.products
  
  return (
    <div>
         <Head title="Our Product" />
       
         <Header title={'products'} description="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur impedit neque dignissimos modi ullam officiis quasi quisquam. Autem, accusantium. Alias iste voluptas unde rem illum quis reiciendis commodi velit sequi." />
         <Container>
            {products.length ?
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    {
                      products.map(product => (
                        <ProductItem product={product} key={product.id} />
                      ))
                    }
                </div>
            : null}

            <Pagination meta={meta} links={links} />
         </Container>
         
    </div>
  )
}

Index.layout  = page => <App children={page} />
