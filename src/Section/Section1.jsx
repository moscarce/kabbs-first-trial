import Frame3 from '../assets/Frame3.png'
import Frame4 from '../assets/Frame4.png'
import Frame5 from '../assets/Frame5.png'
import Phonemockup from '../assets/Phonemockup.png'

function Section1 () {
    return (
        <div>
            <div className="section1">
                <div 
                        style={{backgroundImage: `url(${Frame3})`,
                        backgroundSize: "cover",
                        height: "800px",
                        backgroundRepeat: "no-repeat",
                        color: "#ffffff"
                    }}
                    >
                    <div className="section1-ride">
                        <h1 className="section1-first-header">Ride Smart, Ride Fast, Pay Less.</h1>
                        <h2 className="section1-second-header">Get the app for Iphone and Android</h2>
                        </div>
                        <h2 className="section1-get">Get the kabbs Universal app</h2>
                        <img src={Frame4} 
                        style={{margin: "5px",
                        }}
                        />
                        <img src={Frame5} 
                        style={{margin: "5px",
                        }}
                        />
                        <img src={Phonemockup}
                        style={{
                            float: "right",
                            height: "500px",
                            marginBottom: "0"
                        }}
                        />
                </div>

                    <div className="section1-book">
                      
                        <h2>Book a ride now!</h2>
                        <p>The Kabbs Universal app automatically detects your location and you can request to be picked 
                            up in that location. Kabbs Universal connects you to the closest available driver. You can 
                            also drag the pin to a different location or type an address and request to be picked up from 
                            that point.</p>
                    </div>
            </div>
        </div>
    )
}

export default Section1