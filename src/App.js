import './App.css';
import Header from "./components/Header";
import DigitalProducts from './components/DigitalProducts';
import ProductFeatures from './components/ProductFeatures';
import OnlineCourses from './components/OnlineCourses';
import DigitalDownloads from './components/DigitalDownloads';
import Coaching from './components/Coaching';
import Webinars from './components/Webinars';
import PodiaAccount from './components/PodiaAccount'
import Footer from './components/Footer';

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header/>
      <DigitalProducts/>
      <ProductFeatures/>
      <OnlineCourses/>
      <DigitalDownloads/>
      <Coaching/>
      <Webinars/>
      <PodiaAccount/>
      <Footer/>
    </main>
  );
}

export default App;
