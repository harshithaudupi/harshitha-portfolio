
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


import { Tooltip,OverlayTrigger, Card } from 'react-bootstrap';

export default function Contact ()
{   

   /********************************************Home Tooltip****************************************/
    const homeTooltip = (props) => (
        <Tooltip id="Tooltip" {...props}>
           You can return home
        </Tooltip>
      );
    /********************************************Icon Tooltips****************************************/
      const fbTooltip = (props) => (
        <Tooltip id="Tooltip" {...props}>
           facebook
        </Tooltip>
      );

      const gitTooltip = (props) => (
        <Tooltip id="Tooltip" {...props}>
           gitHub
        </Tooltip>
      );


      const mailTooltip = (props) => (
        <Tooltip id="Tooltip" {...props}>
           email
        </Tooltip>
      );

      const instaTooltip = (props) => (
        <Tooltip id="Tooltip" {...props}>
           instagram
        </Tooltip>
      );

      const discordTooltip = (props) => (
        <Tooltip id="Tooltip" {...props}>
           discord
        </Tooltip>
      );

      const linkedInTooltip = (props) => (
        <Tooltip id="Tooltip" {...props}>
           linkedIn
        </Tooltip>
      );



    /********************************************Icon Styles****************************************/
    const fbStyle={
      color: '#1877F2'
    };

    const instaStyle={
      color: '#C13584'
    };

    const discordStyle={
      color: '#7289DA'
    };

    const gitStyle={
      color: '#181717'
    };
    const mailStyle={
      color:'#DC4E41'
    };

    const linkedInStyle={
      color: '#0A66C2'
    };
    
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
           <>  
    
      
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <OverlayTrigger
                 placement="bottom"
                 delay={{ show: 250, hide: 400 }}
                 overlay={homeTooltip}>
            <Nav.Link onClick={()=>{navigateHome();}}>
              HOME
            </Nav.Link>
            </OverlayTrigger>
            
           

            <Navbar.Brand onClick={()=>{navigateContact();}}>CONTACT</Navbar.Brand>
         </Nav>
         </Navbar.Collapse>
        </Container>
   
    </>
    
     </Navbar>
    
  
       
           <Card className='icon-grid' >
                <div className='icon'>
                
                <OverlayTrigger
                 placement="bottom"
                 delay={{ show: 250, hide: 400 }}
                 overlay={linkedInTooltip}>
                 
                <a href='https://www.linkedin.com/in/harshitha-u-50b307249/'>
                  <i class="bi bi-linkedin"style={linkedInStyle} >  </i>

                  {/* <img src={linkedIn} alt='LinkedIn'></img> */}
                </a>
                </OverlayTrigger>
            </div>

            <div className='icon'>
              
               <OverlayTrigger
                 placement="bottom"
                 delay={{ show: 250, hide: 400 }}
                 overlay={fbTooltip}>
                <a href='https://www.facebook.com/profile.php?id=100011787981625'>
                <i class="bi bi-facebook" style={fbStyle}></i>
                {/* <img src={fb} alt='Facebook'></img> */}
                </a>
                </OverlayTrigger>
            </div>

            <div className='icon'>
               
               <OverlayTrigger
                 placement="bottom"
                 delay={{ show: 250, hide: 400 }}
                 overlay={mailTooltip}>
                <a href='mailto:udupi.harshitha@gmail.com'>
                  <i class="bi bi-envelope-fill"style={mailStyle}></i>
                  {/* <img src={mail} alt='Mail'></img> */}
                  </a>
                  </OverlayTrigger>
            </div>

            <div className='icon'>
                
                <OverlayTrigger
                 placement="bottom"
                 delay={{ show: 250, hide: 400 }}
                 overlay={instaTooltip}>
                <a href='https://www.instagram.com/_.harshitha.u_/'> 
                <i class="bi bi-instagram" style={instaStyle}></i>
                {/* <img src={insta} alt='Instagram'></img> */}
                </a>
                </OverlayTrigger>
            </div>

            <div className='icon'>
              
               <OverlayTrigger
                 placement="bottom"
                 delay={{ show: 250, hide: 400 }}
                 overlay={discordTooltip}>
                <a href='https://discord.com/channels/@me/919571587680854016'>
                  <i class="bi bi-discord" style={discordStyle}></i>
                  {/* <img src={discord} alt='discord'></img> */}
                  </a>
               </OverlayTrigger>
            </div>

            <div className='icon'>
                
               <OverlayTrigger
                 placement="bottom"
                 delay={{ show: 250, hide: 400 }}
                 overlay={gitTooltip}>
                <a href='https://github.com/harshithaudupi'>
                <i class="bi bi-github" style={gitStyle}></i>
                {/* <img src={git} alt='github'></img> */}
                  </a>
                  </OverlayTrigger>  
            </div>
            </Card>

            


       
     

        

       
     </div>
  
    )

}

