import News from './News'
import Services from './Services'
import Partner from './Partner'
import Company from './Company'


function Footer () {
    return (
        <div className="footer">
            <hr></hr>
               <div className='footer-app'>
                   <News />
                   <Services />
                   <Partner />
                   <Company />
               </div>
            <div className='footer-small'><small>© 2023 Kabbs Universal Technologies</small></div>
        </div>
    )
}

export default Footer