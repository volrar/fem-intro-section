import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Nav';
import Home from './pages/Home';
// import Todo from '../pages/Todo';
// import Calendar from '../pages/Calendar';
// import Reminders from '../pages/Reminders';
// import Planning from '../pages/Planning';
// import CompanyHistory from '../pages/CompanyHistory';
import OurTeam from './pages/OurTeam';
// import Blog from '../pages/Blog';
// import Careers from '../pages/Careers';
import About from './pages/About';


const App = () => {

  return(
    <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/features/todo" element={<Todo />} /> */}
                {/* <Route path="/features/calendar" element={<Calendar />} /> */}
                {/* <Route path="/features/reminder" element={<Reminders />} /> */}
                {/* <Route path="/features/planning" element={<Planning />} /> */}
                {/* <Route path="/company/history" element={<CompanyHistory />} /> */}
                <Route path="/company/our-team" element={<OurTeam />} />
                {/* <Route path="/company/blog" element={<Blog />} /> */}
                {/* <Route path="/careers" element={<Careers />} /> */}
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
  );

};

export default App;
