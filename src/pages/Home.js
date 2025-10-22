import React from 'react';
import Hero from '../components/common/Hero';


const Home = () => {

    return (
        <main>
            <section id="hero">
                <Hero />
            </section>

            {/* About Section */}
            <section id="about" className="section" style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1a1a1a' }}>
                            Premium Value-Added Processed Foods
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', maxWidth: '800px', margin: '0 auto 2rem' }}>
                            Priple Sky Trade is your trusted partner in the global food export industry. We specialize in premium value-added processed foods, 
                            bringing authentic flavors and quality products to markets worldwide. From IQF frozen flatbreads to gourmet pickles, 
                            our diverse product range meets the highest international standards.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                            <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>50+</h3>
                                <p style={{ fontSize: '1rem', color: '#666' }}>Products Exported</p>
                            </div>
                            <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>25+</h3>
                                <p style={{ fontSize: '1rem', color: '#666' }}>Countries Served</p>
                            </div>
                            <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>100%</h3>
                                <p style={{ fontSize: '1rem', color: '#666' }}>Quality Assured</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section id="products" className="section" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center', color: '#1a1a1a' }}>
                            Our Product Range
                        </h2>
                        <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            Discover our diverse selection of premium processed foods
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {[
                                { title: 'IQF Frozen Flatbreads', desc: 'Authentic rotis, parathas, and naans flash-frozen for maximum freshness' },
                                { title: 'Ready-to-Fry Snacks', desc: 'Samosas, spring rolls, and more - perfect for quick service' },
                                { title: 'Retort RTE Meals', desc: 'Shelf-stable curries and gravies ready in minutes' },
                                { title: 'Gourmet Pickles & Chutneys', desc: 'Traditional recipes with premium ingredients' },
                                { title: 'Ready-to-Cook Pastes', desc: 'Authentic spice blends for professional kitchens' },
                                { title: 'Global Export Solutions', desc: 'Custom packaging and logistics for international markets' }
                            ].map((product, index) => (
                                <div key={index} style={{ 
                                    padding: '2rem', 
                                    background: 'white', 
                                    borderRadius: '12px', 
                                    boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1a1a1a' }}>
                                        {product.title}
                                    </h3>
                                    <p style={{ color: '#666', lineHeight: '1.6' }}>
                                        {product.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Ready to Partner With Us?
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
                        Contact us today to discuss your food export requirements
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:Greenbeelife@mail.com" style={{
                            padding: '1rem 2rem',
                            background: 'white',
                            color: '#f59e0b',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            transition: 'transform 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            Email Us
                        </a>
                        <a href="tel:+19038940149" style={{
                            padding: '1rem 2rem',
                            background: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.color = '#f59e0b';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                            e.currentTarget.style.color = 'white';
                        }}
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;