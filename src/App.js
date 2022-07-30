import logo from './logo.svg';
import './App.css';
import ElevatedAppBar from './ElevatedAppBar.js';
import Hero from './Hero.js';
import Review from './Review.js';
import Parent from './Parent.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
    <ElevatedAppBar />
    <Hero />
    <Review />
    <Parent />
    </>
  );
}

export default App;
