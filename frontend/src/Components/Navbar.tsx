function Navbar(){
    return (
        <nav className="navbar">
            <h2 className = "logo">SideQuest</h2>

            <div className="nav-links">
                <a href="#">Explore</a>
                <a href="#">Destinations</a>
                <a href="#">My Quests</a>
            </div>

            <button className="profile-btn">
                Log in
            </button>
        </nav>
    );
}

export default Navbar;