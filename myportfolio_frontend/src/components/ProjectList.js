import { useState, useEffect } from "react"
import axios from "axios"

const ProjectsList = () => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/projects/")
			.then(response => {
				setProjects(response.data)
			})
			.catch(error => {
				console.error("Error fetching projects:", error)
			})
	}, [])

	return (
		<div>
			<h1>Projects</h1>
			<ul>
				{projects.map(project => (
					<li key={project.id}>{project.title}</li>
				))}
			</ul>
		</div>
	)
}

export default ProjectsList
