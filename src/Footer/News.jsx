import Frame from '../assets/Frame.svg'

function News () {
    return (
    <div className="footer--news">
        <h4 className="footer-news-letter">Receive latest news</h4>
        <div>
            <input type="email" placeholder="Enter your email address" className="footer-news-input"/>
            <button className="footer-news-button">Get started</button>
        </div>
        <p className="footer-news-note">By entering your email address you are confirming that you 
        agree to subscribe to our newsletter</p>
        <h4 className="footer-news-social">Social Media</h4>
        <img src={Frame} />
        <h2 className="footer-bottom-header">Kabbs Universal</h2>
    </div>
    )
}
 
export default News