import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Wedfin - Quick & Easy Wedding Financing',
    description: 'Get instant approval for your dream wedding with Wedfin. Fast, hassle-free wedding loans with competitive rates. Apply now in just 2 minutes!',
    keywords: 'Wedfin, wedding loan, instant loan, wedding finance, marriage loan, quick loan',
    authors: [{ name: 'Wedfin' }],
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#e91e63',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <header className="header">
                    <div className="container">
                        <div className="header-content">
                            <a href="/" className="logo">
                                💍 Wedfin
                            </a>
                            <nav className="nav">
                                <a href="/">Home</a>
                                <a href="/privacy">Privacy</a>
                                <a href="/terms">Terms</a>
                                <a href="/contact">Contact</a>
                            </nav>
                        </div>
                    </div>
                </header>

                {children}

                <footer className="footer">
                    <div className="container">
                        <div className="footer-content">
                            <div>
                                <h3>Wedfin</h3>
                                <p>Making dream weddings affordable for everyone.</p>
                            </div>
                            <div>
                                <h3>Quick Links</h3>
                                <a href="/">Home</a>
                                <a href="/privacy">Privacy Policy</a>
                                <a href="/terms">Terms of Service</a>
                                <a href="/contact">Contact Us</a>
                            </div>
                            <div>
                                <h3>Contact</h3>
                                <p>Email: support@wedfin.com</p>
                                <p>Phone: +91 79077 11411</p>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>&copy; {new Date().getFullYear()} Wedfin. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}
