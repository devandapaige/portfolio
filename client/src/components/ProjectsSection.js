import ProjectCard from "./ProjectCard"

function ProjectsSection() {
    return (
        <div id="projects">
            <h2>Projects</h2>
            <div>
            {/*For each card in database, map out one of the following cards*/}
            <ProjectCard />
            </div>
        </div>
    )
}
export default ProjectsSection