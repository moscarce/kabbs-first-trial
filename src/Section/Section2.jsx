import cuate from '../assets/cuate.png'
import amico from '../assets/amico.png'


function Section2 () {
    return (
        <div className="section2">
            <div
             style={{
                marginTop: "200px"
            }}
            >
                <img src={cuate}
                style={{
                    float: "right",
                    height: "200px",
                    marginLeft: "100px",
                    paddingLeft: "100px",
                    clear: "right"
                }}
                />
                <h2 className="section2-bold">Pay by card or by cash</h2>
                <h3>Kabbs Universal knows that everyone feels different about paying with cards. That's 
                    why the app gives you a choice of paying with card or cash. You can add multiple
                    cards on file and chose to pay with any of them.</h3>
            </div>
            <div 
            style={{
                marginTop: "200px",
                marginBottom: "200px"
            }}
            >
                <img src={amico} 
                    style={{
                        float: "left",
                        height: "200px",
                        marginRight: "100px",
                    }}
                />
                <h2 className="section2-bold"
                style={{
                    clear: "right"
                }}
                >Get Discounts on Rides</h2>
                <h3> Use Promo Codes to get trips discounts. Tap Promo Enter your Promo Code and tap 
                    apply. Please note promo codes are automatically applied in reverse order. Your most
                    recently added promo code will be applied to your current or next trip.</h3>
            </div>
        </div>
    )
}

export default Section2