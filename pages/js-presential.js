import Link from 'next/link'

import NavBar from '../components/NavBar'

export default function FirstMessage() {
    return (
        <>
            <NavBar />
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}