import Link from 'next/link'

export default function FirstMessage() {
    return (
        <>
            <h1>Bootcamp JS Presencial</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}