import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyle from './styles/GlobalStyles.tsx';
import { ToastContainer } from 'react-toastify';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { BMI } from './components/BMI';
import { Colors } from './components/Colors';
import { NotFound } from './components/NotFound';
import { Counter } from './components/Counter';
import { NumberGuess } from './components/NumberGuess';
import { UnderPage } from './components/UnderPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/react-project/About' element={<About />}/>
        <Route path='/react-project/BMI' element={<BMI />}/>
        <Route path='/react-project/Colors' element={<Colors /> }/>
        <Route path='/react-project/Counter' element={<Counter />} />
        <Route path='/react-project/NumberGuess' element={<NumberGuess />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <ToastContainer autoClose={2000}/>

      <GlobalStyle />

      <UnderPage/>
    
    </BrowserRouter>
  </StrictMode>
);
