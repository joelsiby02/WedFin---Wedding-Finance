export default function Contact() {
    return (
        <main className="content-page">
            <div className="container">
                <h1>Contact Us</h1>
                <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem' }}>
                    Have questions? We're here to help! Reach out to us through any of the following channels.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    <div style={{ padding: '2rem', background: '#f5f5f5', borderRadius: '12px' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📞</div>
                        <h3 style={{ color: '#e91e63', marginBottom: '0.5rem' }}>Phone</h3>
                        <p style={{ color: '#666', marginBottom: '0.5rem' }}>Call us for immediate assistance</p>
                        <a href="tel:+919876543210" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                            +91 98765 43210
                        </a>
                        <p style={{ fontSize: '0.875rem', color: '#999', marginTop: '0.5rem' }}>
                            Mon-Sat: 9:00 AM - 7:00 PM IST
                        </p>
                    </div>

                    <div style={{ padding: '2rem', background: '#f5f5f5', borderRadius: '12px' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📧</div>
                        <h3 style={{ color: '#e91e63', marginBottom: '0.5rem' }}>Email</h3>
                        <p style={{ color: '#666', marginBottom: '0.5rem' }}>Send us your queries</p>
                        <a href="mailto:support@instantweddingloan.com" style={{ fontSize: '1.125rem', fontWeight: '600', wordBreak: 'break-word' }}>
                            support@instantweddingloan.com
                        </a>
                        <p style={{ fontSize: '0.875rem', color: '#999', marginTop: '0.5rem' }}>
                            We'll respond within 24 hours
                        </p>
                    </div>

                    <div style={{ padding: '2rem', background: '#f5f5f5', borderRadius: '12px' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💬</div>
                        <h3 style={{ color: '#e91e63', marginBottom: '0.5rem' }}>WhatsApp</h3>
                        <p style={{ color: '#666', marginBottom: '1rem' }}>Chat with us instantly</p>
                        <a
                            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'}?text=Hello%2C%20I%20need%20help%20with%20wedding%20loan`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            style={{ width: 'auto', padding: '0.75rem 1.5rem', fontSize: '1rem' }}
                        >
                            Chat Now
                        </a>
                    </div>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #e91e63 0%, #ff6f00 100%)', color: 'white', padding: '2.5rem', borderRadius: '12px', marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Business Hours</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        <div>
                            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Monday - Friday</p>
                            <p style={{ opacity: '0.9' }}>9:00 AM - 7:00 PM</p>
                        </div>
                        <div>
                            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Saturday</p>
                            <p style={{ opacity: '0.9' }}>10:00 AM - 5:00 PM</p>
                        </div>
                        <div>
                            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Sunday</p>
                            <p style={{ opacity: '0.9' }}>Closed</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Office Address</h2>
                    <div style={{ padding: '2rem', background: '#f5f5f5', borderRadius: '12px' }}>
                        <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                            Instant Wedding Loan
                        </p>
                        <p style={{ color: '#666', lineHeight: '1.8' }}>
                            [Your Office Address Line 1]<br />
                            [Your Office Address Line 2]<br />
                            [City, State - PIN Code]<br />
                            India
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '3rem', padding: '2rem', background: '#fff3e0', borderRadius: '12px', borderLeft: '4px solid #ff6f00' }}>
                    <h3 style={{ color: '#ff6f00', marginBottom: '1rem' }}>Quick Response Guarantee</h3>
                    <p style={{ color: '#666', margin: 0 }}>
                        We pride ourselves on quick response times. Whether you call, email, or WhatsApp us, our team is committed to getting back to you as soon as possible. For urgent matters, we recommend calling us directly or using WhatsApp for instant support.
                    </p>
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Ready to Apply?</h3>
                    <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                        Get started with your wedding loan application today!
                    </p>
                    <a href="/" className="btn" style={{ width: 'auto', padding: '1rem 2.5rem' }}>
                        Apply Now
                    </a>
                </div>
            </div>
        </main>
    )
}
