import { Container, Button, Image, Stack } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import heroMobile from '../assets/images/image-hero-mobile.png';
import heroDesktop from '../assets/images/image-hero-desktop.png';
import client1 from '../assets/images/client-databiz.svg';
import client2 from '../assets/images/client-audiophile.svg';
import client3 from '../assets/images/client-meet.svg';
import client4 from '../assets/images/client-maker.svg';
import './Home.css';

const Intro = () => {
    const [heroImage, setHeroImage] = useState(heroDesktop);

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth <= 991) { // Change image if width is 768px or less
                setHeroImage(heroMobile);
            } else {
                setHeroImage(heroDesktop);
            }
        };

        updateImage(); // Call on component mount
        window.addEventListener('resize', updateImage);
        return () => window.removeEventListener('resize', updateImage);
    }, []);


    return(
        <>

        <Container className='hero-container'>

            <Container className='hero-content-container' >
                <div className='hero-content'>
                    <h2><b>Make Remote Work</b></h2>
                    <p>Get your team in sync, no matter your location. Steamline processes, create team rituals, and watch productivity soar.</p>
                    <Button variant="dark" type='button' href='/About'>Learn more</Button>
                 </div>

                 <Stack direction='horizontal'>
                    <Image src={client1} alt='databiz' className='client-image'/>
                    <Image src={client2} alt='audiophile' className='client-image'/>
                    <Image src={client3} alt='meet' className='client-image'/>
                    <Image src={client4} alt='maker' className='client-image'/>
                </Stack>
            </Container>

            <Container className='hero-image-container'>
                <Image src={heroImage} alt='hero-image' fluid/>
            </Container>
        
        </Container>
        </>
        
    );

}

export default Intro;