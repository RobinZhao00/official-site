import logo from './logo.svg';
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from 'react-bootstrap';
import './App.scss';
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Header/>
      <div className="container content-container">
        {
          useRoutes(routes)
        }
      </div>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
