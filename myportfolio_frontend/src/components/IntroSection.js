import { Link } from "react-router-dom"

const IntroSection = () => {
	return (
		<section className="bg-light py-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 mx-auto text-center">
						<h2 className="display-4">About Me</h2>
						<p className="lead mb-4">
							Hello! I'm Peter Osoo, a passionate developer specializing in
							React and Django. With over three years of experience as a
							self-taught developer, I've honed my skills in building robust web
							applications. I'm particularly interested in project management
							and enjoy working on finance apps that empower users to manage
							their finances effectively.
						</p>
						<p className="mb-4">
							In my free time, I love staying active by walking 10k steps daily
							and delving into the world of literature through reading books. I
							also have a keen interest in film production and graphics design,
							exploring the creative aspects of visual storytelling.
						</p>
						<Link to="/projects" className="btn btn-primary btn-lg">
							View Projects
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default IntroSection
