import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/shop/Header';
import Article from '../components/shop/Article';
import Footer from '../components/shop/Footer';

export default function Shop() {
  return (
    <div>
      <Header />
      <Article />
      <Footer />
    </div>
  );
}
