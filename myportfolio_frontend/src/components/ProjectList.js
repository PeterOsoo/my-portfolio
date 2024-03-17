import { useState, useEffect } from "react"
import axios from "axios"

const ProjectsList = () => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		console.log("Fetching projects...")
		axios
			.get("http://localhost:8000/api/projects/")
			.then(response => {
				console.log("Projects data:", response.data)
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
					<li key={project.id}>
						<h3>
							<span>{project.id}. </span> {project.title}
						</h3>
						<p>{project.description}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProjectsList
