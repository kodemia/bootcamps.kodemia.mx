import Link from 'next/link'

function NavBar () {
    return (
        <div className='navbar'>
            <Link href="/"><img className='logo' src='/images/kodemia-logo-white.png' alt='Logo Kodemia'/></Link>
            <Link href="/"><a className='apply-button'>Aplica hoy</a></Link>
        </div>
    )
}

export default NavBar