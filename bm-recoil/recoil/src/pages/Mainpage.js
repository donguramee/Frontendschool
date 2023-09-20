import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/mainpage/Header';
import Article from '../components/mainpage/Article';
import Footer from '../components/mainpage/Footer';

export default function Mainpage() {
  return (
    <div>
      <Header />
      <Article />
      <Footer />
    </div>
  );
}
