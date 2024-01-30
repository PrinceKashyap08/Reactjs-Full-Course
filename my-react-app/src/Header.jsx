import './Header.css'
function Header (){
    return(
        <header>
            <nav className="navbar">
                <div className="logo">
                    <a href="#">LOGO</a>
                </div>
                <ul className="nav-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header