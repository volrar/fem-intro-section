import React from 'react';
import { Container, Image, Stack, Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import remoteWork from '../assets/images/remote-work.jpg'
import people from '../assets/images/people.jpg';
import aboutCareers from '../assets/images/careers.jpg';
import seamless from '../assets/images/seamless-collaboration.jpg';
import efficiency from '../assets/images/efficiency.jpg';
import secure from '../assets/images/people.jpg';
import friendly from '../assets/images/friendly.jpg';
import './About.css'

function About() {
    const [work, setWork] = useState([]);

    useEffect(() => {
        const work = [
            {
                id:1,
                image: seamless,
                title: 'Seamless Collaboration',
                description: 'Message, meeter and share files all in one place.'
            },
            {
                id:2,
                image: efficiency,
                title: 'Ai - Powered Efficiency',
                description: 'Automate workflows and streamline project management.'
            },
            {
                id:3,
                image: people,
                title: 'Secure & Scalable Solutions',
                description: 'Work with confidence, backed by enterprise-grade security.'
            },
            {
                id:4,
                image: friendly,
                title: 'User-Friendly Interface',
                description: 'Built for team of all sizes, with no learning curve required.'
            },
        ];

        setWork(work);

    }, []);

  return (
    
    <Container className='about-content'>

        <h2 className='sr-only'>About Snap</h2>

        <Container>

            <article className='d-flex'>

                <Image src={remoteWork} alt='remote-work' className='remote-image'/>

                <Stack className='rw-content-container p-2'>

                    <h3>Redefining Remote Work</h3>

                    <p>At Snap, We belive that where you work shouldn't limit how you work. Our mission is to provide teams with the tools they need to collaborate effortlessly, no matter their location.
                        Whether you're a startup embracing remote-first culture or a global enterprise managing distributed teams, Snap makes it easy to stay connected, organized, and productive.
                    </p>

                    <p>Built with simplicity and innovation at its core, Snap eliminates the common frustrations of remote work. From streamlined communication to intelligent task managment, we offer
                        a unified platform that empowers teams to work smarter - not harder.
                    </p>

                </Stack>

            </article>        

        </Container>

        <p className='test'>
            We see a future where distance is no longer a barrier to success. As remote and hybrid work continue to evolve, we're committed to building solutions that foster
             seamless collaboration, deeper engagement, and better work-life balance. Snap is designed to help teams thrive in a digital workspace, providing the structure
            and flexibility they need to do their best work - wherever they are.
        </p>


            <article className='about-content-container'>

                <h3>What We Offer</h3>

                <Container className='offer-container'>
                    {work.map((work, index) => {
                    return (
                            <Card style={{padding: `1rem`, border: `none`, width: `300px`}}>
                            <Card.Body className='d-flex card-hover-effect' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${work.image})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center`, minHeight: `300px`,  borderRadius: `1rem` }}>
                                <Container className='card-text'>
                                    <Card.Title>{work.title}</Card.Title>
                                    <Card.Text>{work.description}</Card.Text>
                                </Container>
                            </Card.Body>
                        </Card>
                     );
                    })}
                </Container>

                

            </article>
        
        <article className='about-content-container d-flex'>

            <Container className='people-container'>

            <h3>Driven by Innovation, Built for People</h3>

            <p>Since our founding, we've remained focused on putting people first - desgining technology that adapts to how teams actually work, rather than forcing them into rigid systems.
                Every feature we develop is driven by real-world needs, ensuring that Snap remains intuitive, powerful, and adaptable.
            </p>
            
            </Container>

            <Container>

                 <Image src={people} alt='people' className='people-image'/>

            </Container>
             
        </article>

       
        <article className='about-content-container d-flex'>

            <Container>

                <Image src={aboutCareers} alt='about-careers.jpg' className='about-image' />

            </Container>

            <Container className='about-careers-content'>
                <h3>Join the Future of Work</h3>

                <p>Snap isn't just a tool - It's  movement towards a more connected, flexible, and productive workplace. Whether you're a team of two or a company of thousands,
                    we're here to help you unlock your full potential.
                </p>

                <p>Let's make remote work effortless - Together.</p>

                <Button variant="dark" type='button' className='w-25' href='/Careers'>Careers</Button>

            </Container>

            
        </article>
        

    </Container>
  )
}

export default About