import { useState, useEffect } from "react"
import axios from "axios"

const ProjectsList = () => {
	const [projects, setProjects] = useState([])

	const url = "http://localhost:8000/api/projects/"

	useEffect(() => {
		console.log("Fetching projects...")
		axios
			.get(url)
			.then(response => {
				console.log("Projects data:", response.data)
				setProjects(response.data)
			})
			.catch(error => {
				console.error("Error fetching projects:", error)
			})
	}, [])

	return (
		<div className="container">
			<h1 className="my-4">Projects</h1>
			<div className="row">
				{projects.map(project => (
					<div key={project.id} className="col-md-6 mb-4">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{project.title}</h5>
								<p className="card-text">{project.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProjectsList
