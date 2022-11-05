import "./Footer.css"
import I4G from './assets/I4G.png'

const Footer = () => {
  return (
    
    <footer>        
        <div className='Logo-zuri'>
            <h2>
                Zuri 
                <span></span>
                    Internship
            </h2>
        </div>
        <div className='Text-zuri'>
            <p>HNG Internship 9 Frontend Task</p>
        </div>
        <div className='Logo-i4g'> 
        <img src={I4G} alt="I4G logo" width="100px"/>
        </div>  
    </footer>
    
  )
}

export default Footer