import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"
import NoPage from "./pages/NoPage"

import Navbar from "./components/Navbar"

const App = () => {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<HomePage />} />

					<Route path="projects" element={<ProjectsPage />} />
					<Route path="/contact" element={<ContactPage />} />

					<Route path="*" element={<NoPage />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
