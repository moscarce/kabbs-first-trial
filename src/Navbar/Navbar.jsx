function Navbar () {
    return (
       <div className="navbar">
            <h1>Kabbs Universal</h1>
            <ul className="nav-list">
                <li className="nav-list">Home</li>
                <li className="nav-list">Products</li>
                <li className="nav-list">Contacts</li>
                <li className="nav-list">About Us</li>
            </ul>
            <div>
                <button className="nav-button-login">Log in</button>
                <button className="nav-button">Sign up</button>
            </div>
            
       </div>
    )
}

export default Navbar