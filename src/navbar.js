import trophy from './images/world-cup.png'

function Navbar() {
    return (
        <div className="menu-container">
            <nav className="menu">
                <a href="World Cup Trophy" className="logo"><img src={trophy} alt="Logo" width="50px"/>World Cup Facts</a>
            </nav>
            <hr />
        </div>
    )
}

export default Navbar