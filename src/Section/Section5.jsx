import image2 from '../assets/image2.png'
import bro from '../assets/bro.png'
import Bros from '../assets/Bros.png'

function Section5 () {
    return (
        <div className="section5">
                <img src= {image2} 
                style={{
                    paddingLeft: "300px",
                    height: "100px"
                }}
                />
            <div>
                <h4>Reliable Rides</h4>
                <p>You'll see your driver's contact details and can rate them at the end of the trip. 
                    Your feedback helps us keep the best drivers</p>
            </div>
            <img src={bro}
             style={{
                paddingLeft: "300px",
                height: "100px"
            }}
            />
            <div>
                <h4>No Cash, No Hasle</h4>
                <p>Pay in cash or add your credit card to the app and we'll authomatically charge
                     it when you arrive your destination.</p>
            </div>
            <img src={Bros}
            style={{
                paddingLeft: "300px",
                height: "100px"
            }}
            />
            <div>
                <h4>Conveninent Business Trips</h4>
                <p>You can use Kabbs Universal for your personal or business trips. Switch the payment
                     method at the tap of a button.</p>
            </div>
        </div>
    )
}

export default Section5