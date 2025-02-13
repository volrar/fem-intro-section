import './Nav.css';
import { Container, Nav, Navbar, NavDropdown, Button, Image, Stack } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import todoIcon from '../assets/images/icon-todo.svg';
import calendarIcon from '../assets/images/icon-calendar.svg';
import reminderIcon from '../assets/images/icon-reminders.svg';
import planningIcon from '../assets/images/icon-planning.svg';
import arrowUp from '../assets/images/icon-arrow-up.svg';
import arrowDown from '../assets/images/icon-arrow-down.svg';

const featureLinks = [
    { href: '/features/todo', icon: todoIcon, alt: 'Todo List', text: 'Todo List' },
    { href: '/features/calendar', icon: calendarIcon, alt: 'Calendar', text: 'Calendar' },
    { href: '/features/reminder', icon: reminderIcon, alt: 'Reminders', text: 'Reminders' },
    { href: '/features/planning', icon: planningIcon, alt: 'Planning', text: 'Planning' }
];

const companyLinks = [
    { href: '/company/history', text: 'History' },
    { href: '/company/our-team', text: 'Our Team' },
    { href: '/company/blog', text: 'Blog' }
];

const CustomNavDropdown = ({ title, links }) => {
    const [open, setOpen] = useState(false);

    return (

        <NavDropdown

            title={<span>{title} <Image src={open ? arrowUp : arrowDown} alt="Arrow" /></span>}
            id={`${title.toLowerCase()}-nav-dropdown`}
            onToggle={(isOpen) => setOpen(isOpen)}
            className="custom-dropdown"

        >

            {links.map(({ href, icon, alt, text }) => (

                <NavDropdown.Item key={text} href={href}>

                    {icon && <Image src={icon} className="p-2" alt={alt} />} {text}

                </NavDropdown.Item>

            ))}

        </NavDropdown>

    );
    
};

const Navigation = () => (

    <Navbar expand="lg" className="bg-body-tertiary">

        <Container>

            <Navbar.Brand href="/">

                <Image src={logo} alt="Snap Logo" />

            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">

                    <Stack direction="horizontal" gap={3}>

                        <CustomNavDropdown title="Features" links={featureLinks} />

                        <CustomNavDropdown title="Company" links={companyLinks} />

                        <Nav.Link href="/careers">Careers</Nav.Link>

                        <Nav.Link href="/about">About</Nav.Link>

                    </Stack>

                </Nav>

                <Stack direction="horizontal" gap={3}>

                    <Button variant="light" className="p-2">Login</Button>

                    <Button variant="outline-secondary" className="p-2">Register</Button>

                </Stack>

            </Navbar.Collapse>

        </Container>

    </Navbar>

);

export default Navigation;
