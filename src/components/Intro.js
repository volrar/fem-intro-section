import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import client1 from '../assets/images/client-databiz.svg';
import client2 from '../assets/images/client-audiophile.svg';
import client3 from '../assets/images/client-meet.svg';
import client4 from '../assets/images/client-maker.svg';
import hero from '../assets/images/image-hero-desktop.png';
import heroSmall from '../assets/images/image-hero-mobile.png';
import './Intro.css';


const Intro = () => {
    return(

        <Container>

            <Row>

                <Col lg={7} md={6}>

                    <Container className=''> 

                        <div className='hero-content'>

                            <h2><b>Make remote work</b></h2>

                            <p>Get your team in sync, no matter your location. Steamline processes, create team rituals, and watch productivity soar.</p>

                            <Button variant="dark ">Learn more</Button>

                        </div>

                        <Container>

                            <Row className='p-2'>

                                <Col lg={3} md={5} sm={3} xs={6}>
                                    <Image src={client1} alt="databiz" />
                                </Col>

                                <Col lg={3} md={5} sm={3} xs={5}>
                                    <Image src={client2} alt="audiphile"/>
                                </Col>

                                <Col lg={3} md={4} sm={3} xs={5}>
                                     <Image src={client3} alt="meet"/>
                                </Col>

                                <Col>
                                     <Image src={client4} alt="maker"/>
                                </Col>

                            </Row>

                        </Container>

                    </Container>

                </Col>

                <Col lg={5} md={6}>
                    <Image src={window.innerWidth < 992 ? heroSmall : hero} className='w-80' fluid/>
                </Col>

            </Row>

        </Container>
        
    );
}

export default Intro;