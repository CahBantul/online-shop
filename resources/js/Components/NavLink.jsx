import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';

export default function NavLink({  className = '', children, ...props }) {

    return (
        <Link
            {...props}
            className={clsx(className, usePage().url == props.href && 'font-semibold text-black', 'text-gray-600 hover:text-black py-2' )}
        >
            {children}
        </Link>
    );
}
