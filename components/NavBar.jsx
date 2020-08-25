import Link from "next/link";

function NavBar() {
  return (
    <nav id='navbar' className="navbar">
      <div className='container'>
        <Link href="/">
          <img
            className="logo"
            src="/images/kodemia-logo-white.png"
            alt="Logo Kodemia"
          />
        </Link>
        <Link href="/">
          <a className="button">
            Aplica
            <span>&nbsp;hoy</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
