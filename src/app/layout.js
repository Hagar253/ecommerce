'use client';
import React from 'react';
import StoreProvider from '@/app/StoreProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}