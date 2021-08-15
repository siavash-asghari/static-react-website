import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import React from 'react';
import CustomTheme from './assets/CustomTheme';
import './assets/fonts/css/fontiran.css';
import './assets/style.css';
import ConcertInfo from './components/concertInfo/Index';
import Featured from './components/featured';
import Header from './components/header_footer/Header';
import HighLights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll';
import Container from '@material-ui/core/Container';


// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function App() {
  return (


    <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
        <Container maxWidth='false'>

          <Header />


          <Element name="Featured">
            <Featured />
          </Element>

          <Element name="ConcertInfo">

            <ConcertInfo />

          </Element>

          <Element name="HighLights">

            <HighLights />

          </Element>

          <Element name="Pricing">
           
              <Pricing />
  
          </Element>

          <Element name="Location">

            <Location />

          </Element>


          <Footer />

        </Container>
      </StylesProvider>
    </ThemeProvider>


  );
}

export default App;
