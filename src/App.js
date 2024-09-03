import './App.css';

import DigitalProducts from './components/DigitalProducts';
import ProductFeatures from './components/ProductFeatures';
import OnlineCourses from './components/OnlineCourses';
import DigitalDownloads from './components/DigitalDownloads';
import Coaching from './components/Coaching';
import Webinars from './components/Webinars';
import PodiaAccount from './components/PodiaAccount'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header />
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
