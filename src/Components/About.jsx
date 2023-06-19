import '../App.css'

function About() {
    return (
        <div className="about">
            <div className='top-div'>
                <h1>ABOUT ME</h1>
                <div className='line' ></div>
                <p className='info'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className='left-div'><h3>Get to know me</h3>
                <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                    <br />
                    <br />
                    Young, energetic and result oriented professional seeking a responsible and a career-oriented opportunity in an organization that could utilize my knowledge and ability in a competitive environment.                    <br />
                    <br />
                    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                    <button type="button" className="probtn cont" style={{width: "180px" , height: "50px" , position:"relative"}}>Contact</button>
            </div>
            <div className='right-div'>
                <h2>My Skills</h2>
                <div  className='skills'>
                <button className='skill' disabled>HTML</button>
                <button className='skill' disabled>CSS</button>
                <button className='skill' disabled>JavaScript</button>
                <button className='skill' disabled>React</button>
                <button className='skill' disabled>React Js</button>
                <button className='skill' disabled>Java</button>
                <button className='skill' disabled>Spring Boot</button>
                <button className='skill' disabled>GIT</button>
                <button className='skill' disabled>Responsive Design</button>
                <button className='skill' disabled>SQL</button>
                </div>
            </div>
        </div>
    );
};

export default About;