import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	const [collapsed, setCollapsed] = useState(true)

	const toggleNavbar = () => {
		setCollapsed(!collapsed)
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<NavLink className="navbar-brand" to="/">
					My Portfolio
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					onClick={toggleNavbar}
					aria-controls="navbarNav"
					aria-expanded={!collapsed ? "true" : "false"}
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
					id="navbarNav"
				>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<NavLink
								exact
								className="nav-link"
								activeClassName="active"
								to="/"
								onClick={toggleNavbar}
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/projects"
								onClick={toggleNavbar}
							>
								Projects
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/contact"
								onClick={toggleNavbar}
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
