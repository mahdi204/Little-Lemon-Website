import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import ReserveTable from './Components/ReserveTable';  // Import your ReserveTable component

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page route - includes Nav, Header, Main, and Footer */}
        <Route path="/" element={
          <>
            <Nav />
            <Header />
            <Main />
            <Footer />
          </>
        } />

        {/* Reserve Table page route */}
        <Route path="/reserve-table" element={<ReserveTable />} />
      </Routes>
    </Router>
  );
}

export default App;
