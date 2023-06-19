import '../App.css'

function Projects() {
    return (
        <div className="projects" >
            <div className='project'>
                <h1>PROJECTS</h1>
                <div className='line' ></div>
                <p className='info'>Here you will find some of the projects that I created.
                    <br />
                    These projects demonstrate my expertise with practical examples of some of my work, including links to code repositories and live demos. They showcase my ability to tackle intricate challenges.</p>
            </div>
            <div className="photo" >
                <div className="image"></div>
            </div>
            <div className='proinfo'>
                <h2>Sorting Visualizer </h2>
                <p className="prodisc">This is a project to let everyone understand how sorting algorithms work. </p>
                <div  >
                <a href="https://sanjitkumar2000.github.io/SortingVisualizer/" target="_blank"><button type="button" className="probtn aa" >PROJECT</button></a>
                <a href="https://github.com/SanjitKumar2000/SortingVisualizer" target="_blank"><button type="button" className="probtn ab">CODE</button></a>
                </div>
            </div>
        </div>
    )
}

export default Projects;