'use client';

import React from 'react';
import '@gravity-ui/uikit';
import './globals.css';
import { ToastContainer } from 'react-toastify'; // Импортируем ToastContainer

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
