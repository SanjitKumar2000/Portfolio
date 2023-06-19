import '../App.css'

function Home() {
    return (
        <div className="home">
            <div className='myImg'>
                <div className='me'></div>
            </div>
            <div className='myInfo'>
                <h1 className='name'>HEY, I'M SANJIT KUMAR</h1>
                <hr />
                <p className='info' >A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                <button type="button" className="probtn" onClick={() => window.scrollTo(0, 1790)} >PROJECTS</button>
                <div className="scroll-downs">
                    <div className="mousey">
                        <div className="scroller"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;