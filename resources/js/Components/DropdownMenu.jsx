import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import { Link } from '@inertiajs/react'

function DropdownMenuLink({ href, children, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    {...props}
                    className={clsx(active && 'bg-gray-100 text-black', 'w-full block text-left text-gray-600 py-1.5 px-3 text-sm')}
                    href={href}
                >
                    {children}
                </Link>
            )}
        </Menu.Item>
    )
}

function DropdownMenu({ label, children }) {
    return (
        <Menu className='relative' as='div'>
            {({ open }) => (
                <>
                    <Menu.Button className={'flex items-center gap-x-2'}>
                        {label}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx("w-6 h-6  transition duration-200", open && "rotate-180")}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </Menu.Button>

                    <Menu.Items className={"bg-white py-1 rounded-lg shadow-sm border absolute w-64 top-full mt-2 right-0"}>
                        {children}
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}

DropdownMenu.Link = DropdownMenuLink

export default DropdownMenu;