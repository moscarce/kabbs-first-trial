import Frame6 from '../assets/Frame6.png'

function Section3 () {
    return (
        <div className="section3"
        style={{backgroundImage: `url(${Frame6})`,
        backgroundSize: "cover",
        clear: "left",
        }}>
            <div>
                <h1 className="section3-drive">Drive & Earn!</h1>
                <p className="section3-call">Call the shots, be your own boss!</p>
            </div>
            <button className="section3-button">Sign up to Drive</button>
        </div>
    )
}

export default Section3