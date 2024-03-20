import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
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

					<Route path="*" element={<NoPage />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
