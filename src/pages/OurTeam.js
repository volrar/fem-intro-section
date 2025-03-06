import React from 'react';
import { Container, Card, Button, Image } from 'react-bootstrap';
import './OurTeam.css';
import ElliotC from '../assets/images/elliot-carter.jpg';
import SophiaL from '../assets/images/sophia-lin.jpg';
import RaviP from '../assets/images/ravi-patel.jpg';
import MiaT from '../assets/images/sophia-torres.jpg';
import AvaB from '../assets/images/ava-brooks.jpg';
import DanielP from '../assets/images/daniel-park.jpg';
import culture from '../assets/images/culture.jpg';
import flexability from '../assets/images/flexability.jpg';
import collaboration from '../assets/images/collaboration.jpg';
import innovation from '../assets/images/innovation.jpg';

function OurTeam() {

    const employee = [
        {
            id:1,
            name: 'Elliot Carter',
            role: 'Co-founder & CEO',
            picture: ElliotC,
        },
        {
            id:2,
            name: 'Sophia Lin',
            role: 'Co-founder & CTO',
            picture: SophiaL,
        },
        {
            id:3,
            name: 'Ravi Patel',
            role: 'Head of Product Desgin',
            picture: RaviP,
        },
        {
            id:4,
            name: 'Mia Torres',
            role: 'Chief Marketing Officer',
            picture: MiaT,
        },
        {
            id:5,
            name: 'Ava Brooks',
            role: 'Head of Customer Success',
            picture: AvaB,
        },
        {
            id:6,
            name: 'Daniel Park',
            role: 'Director of Engineering',
            picture: DanielP,
        },
    ];

    const offer = [
        {   
            id:1,
            picture: flexability,
            title: 'Flexability',
            text: "At Snap, we believe the productivity shouldn't be tied to a desk. Whether you're working from a ome office, a co-working space, or halfway across the wold, our platform is designed to adapt to your lifestyle, not the other way around.  With Snap, you have the freedom to choose when, where and how you work - without sacrificing collaboration or efficiency. Our intuitive tools ensure that remote teams stay connected, engaged, and productive, no matter their location or time zone.",
        },
        {   
            id:1,
            picture: collaboration,
            title: 'Collaboration',
            text: "At Snap, we believe the productivity shouldn't be tied to a desk. Whether you're working from a ome office, a co-working space, or halfway across the wold, our platform is designed to adapt to your lifestyle, not the other way around.  With Snap, you have the freedom to choose when, where and how you work - without sacrificing collaboration or efficiency. Our intuitive tools ensure that remote teams stay connected, engaged, and productive, no matter their location or time zone.",
        },
        {   
            id:1,
            picture: innovation, 
            title: 'Innovation',
            text: "At Snap, we believe the productivity shouldn't be tied to a desk. Whether you're working from a ome office, a co-working space, or halfway across the wold, our platform is designed to adapt to your lifestyle, not the other way around. With Snap, you have the freedom to choose when, where and how you work - without sacrificing collaboration or efficiency. Our intuitive tools ensure that remote teams stay connected, engaged, and productive, no matter their location or time zone.",
        },
    ];

  return (
    <>
        <Container className='p-4 d-flex behind-hero'>

            <Container className='behind-container'>

                <h3>The People Behind Snap</h3>

                <p>At Snap, we belive that great technology is built by great people. Our team is a group of passionate innovators, desginers, and problem-solvers
                who are dedicated to making remote work effortless. From engineering to customer success, every person at Snap plays a role in shaping the future of collaboation.
                </p>

                <p>We come from diverse backgrounds, work across multiple timezones, and share one common goal: to create tools that empower teams to work smarter, not harder.</p>
            
            </Container>
            <Container className='part d-flex'>

                <Image src={culture} alt='culture.png' className='behind-image'/>

            </Container>

        </Container>

        <Container className='culture-container'>

            <h3>The Snap Culture</h3>

            <p className='p-4' style={{fontSize: `18px`}}>At Snap, we practice what we preach - we're a fully remote team, working across different time zones, cultures, and backgrounds. <br />We believe in:</p>

            <Container className='d-flex flex-column'>

            {offer.map((offer, index) => {
                return (
                    <Container className={`d-flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} style={{flexWrap: `wrap`}}>

                        <Image className='offer-card m-auto w-75' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${offer.picture})`, minWidth: `350px`, maxWidth: `450px`}} />

                        <Container className='p-5 d-flex flex-column justify-content-around w-50 test' style={{width: `100%`}}>

                        <h5>{offer.title}</h5>

                        <p style={{fontSize: `18px`}}>{offer.text}</p>

                        </Container>

                    </Container>
                );
            })}

            </Container>

        </Container>

        <Container className='team-container'>

            <h3>Meet the Team</h3>

            <Container className='employee-card-container'>

                {employee.map((employee, index)  => {
                return (
                            <Card style={{background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(${employee.picture})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`}} className='employee-card'>
                                <Card.Body className='employee-card-text'>
                                    <h4>{employee.name}</h4>
                                    <p>{employee.role}</p>
                                </Card.Body>
                            </Card>
                    );
                })}

            </Container>

        </Container>
{/* 
        <Container className='p-5'>
            <h3>Want to Join Us?</h3>

            <p>We're always looking for talented, passionate people to help us shape the future of remote work. If you're excited about collaboration, technology, and making work better,
                check out our open positions and become part of our growing team.
            </p>

            <p>Let's build the future of work, together.</p>

            <Button type='button' href='/careers' className=''>Careers</Button>
            
        </Container> */}
    </>
  );
}

export default OurTeam