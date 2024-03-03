//import AboutUs_Organization from './AboutUs_Organization'
import './AboutUs.css'

//import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom';

function AboutUs() {
  return (
    <>
      <div className="root">

        <nav className='aboutus-navabar'>
          <ul>          
              <li>             
                <Link to="/aboutus_organization">Who are we?</Link>
              </li>                   
          </ul>
        </nav>

        <div className="aboutus">
         <ul>
          <li>
            <a href="#" >About Us</a>
          </li>
        </ul>
        </div>
        <div className="p1">
          
        Welcome to Jollitown Architecture, where creativity meets culinary charm! Established in 1999, Jollitown Associates has evolved into a vibrant studio comprising dedicated individuals who share a passion for innovative design and culinary experiences. Inspired by the spirit of Jollitown, our team strives to create spaces that reflect the warmth and joy of Jollibee's fictional town.

        At Jollitown Architecture, we believe in the power of architecture to enhance the human experience. Just like the beloved fast-food brand, we understand the importance of creating spaces with 'good bones' that resonate with individuals. From whimsical fast-food restaurants to elegant dining spaces, each project is meticulously crafted to exceed our clients' expectations and enrich the community.
          
        Our collaborative approach fosters personal relationships with clients, builders, and projects, ensuring that every design is infused with care and thoughtfulness. With a rigorous process that challenges conventional norms and embraces site context, we transform visions into tangible, rewarding experiences.
          
        Join us on a journey where imagination knows no bounds, and every project is a celebration of creativity and joy. Welcome to Jollitown Architecture, where dreams become reality."
          
        Feel free to adjust the text to better fit your vision and brand identity! Let me know if you need further assistance or modifications.         
        </div>
      </div>
    </>
    
  )
}

export default AboutUs