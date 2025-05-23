'use client';

import './globals.css';
import NavBar from '../components/NavBar';
import { Container } from 'reactstrap';
import Footer from '../components/Footer';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/assets/auth0-theme.css" />
            </head>
            <body>
                <UserProvider>
                    <main id="app" className="d-flex flex-column h-100" data-testid="layout">
                        <NavBar />
                        <Container className="flex-grow-1 mt-5">{children}</Container>
                        <Footer />
                    </main>
                </UserProvider>
            </body>
        </html>
    );
}
