import { NavLink } from "react-router-dom"

function Header() {
    return(
        <div className="container-header">

            <NavLink className="logo" to="/">{ '</1App>' }</NavLink>
            
            <nav className="nav-bar">
                {
                    localStorage.getItem('@1app/displayname') === null
                    ?
                    <>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    </>
                    :
                    <>
                    <NavLink to="/">Users</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                    </>
                }
            </nav>                
        </div>
    )
}

export default Header

