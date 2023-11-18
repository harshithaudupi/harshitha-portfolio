import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Tooltip,OverlayTrigger } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import harsh7 from './harsh7.JPG';
import {Image} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TextAnimation from './TextAnimation';

export default function Home()
{
    
      
  
      const contactTooltip = (props) => (
        <Tooltip id="Tooltip" {...props}>
          Click here to contact me
        </Tooltip>
      );

      const navigate= useNavigate();
    const navigateHome=()=>{
    navigate("/");
    }

    const navigate1= useNavigate();
    const navigateContact=()=>{
    navigate1("/contact");
    }


      

    return(
        
        <div className='background'>
        <Navbar bg="dark" variant="dark" expand="sm">
        
        <Container>
          
          <Navbar.Brand onClick={()=>{navigateHome();}}>HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

        

            <OverlayTrigger
                 placement="bottom"
                 delay={{ show: 250, hide: 400 }}
                 overlay={contactTooltip}>
            <Nav.Link onClick={()=>{navigateContact();}}>CONTACT</Nav.Link>
            </OverlayTrigger>
         </Nav>
         </Navbar.Collapse>
        </Container>
   
      </Navbar>
 
      <div >
    
      
       <Card className='aboutMe' >

          <Image className='profile' src={harsh7} fluid alt='Profile'>
      </Image>
     
     <TextAnimation className='harshitha'></TextAnimation>
          
      
      <p className='paragraph'>
       <p> Welcome to my world of endless exploration and boundless creativity! I'm thrilled to have you here on my website, where I share my passion
       for adventure, design, culinary delights, and all things technical.  I'm an avid traveler, constantly seeking new experiences and immersing
       myself in diverse cultures. </p>
       
      <p> Cooking is another one of my passions and I like to experiment with food.When I'm in the kitchen, I feel like I'm in my happy place.Sharing my homemade food with others and seeing their smiles is the best reward. 
        I turn to music for recreation, and singing is my heartfelt expression. The power of music to touch hearts and unite people is 
     something I cherish deeply.</p>
     
     <p> Beyond my personal interests, I possess strong leadership and communication skills. I believe in the power of effective collaboration and 
    thrive in team environments where ideas are shared and nurtured. Helping others is a fundamental part of who I am, and I derive immense 
    satisfaction from making a positive impact on people's lives. 
   </p>
    </p>
    </Card>
    </div>
   
      </div>
    )

}

