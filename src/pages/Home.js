import React from 'react';
import Hero from '../components/common/Hero';
import { motion } from 'framer-motion';
import { FaLeaf, FaGlobeAmericas, FaAward, FaUsers } from 'react-icons/fa';


const Home = () => {

    return (
        <main>
            <section id="hero">
                <Hero />
            </section>

            {/* About Us Section with Video Background */}
            <section id="about-us" className="relative min-h-screen flex items-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                    >
                        <source src={`${process.env.PUBLIC_URL}/images/aboutbg.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Content */}
                <div className="container relative z-10 py-20 md:py-32">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16 md:mb-20"
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '80px' }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="h-1 bg-amber-500 mx-auto mb-6"
                            />
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                                About <span className="text-amber-500">Priple Sky Trade</span>
                            </h2>
                            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                                Your Global Partner in Premium Value-Added Processed Foods
                            </p>
                        </motion.div>

                        {/* Main Content Grid */}
                        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
                            {/* Left Column - Story */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Story</h3>
                                <div className="space-y-4 text-white/80 leading-relaxed">
                                    <p>
                                        Founded with a vision to bridge authentic flavors with global markets, Priple Sky Trade has emerged as a 
                                        leading name in the food export industry. We specialize in bringing premium value-added processed foods 
                                        from traditional recipes to modern kitchens worldwide.
                                    </p>
                                    <p>
                                        Our journey began with a simple mission: to preserve the authenticity of traditional cuisines while 
                                        meeting international quality standards. Today, we proudly serve over 25 countries with a diverse range 
                                        of products that combine heritage with innovation.
                                    </p>
                                    <p>
                                        From IQF frozen flatbreads to gourmet pickles, every product in our portfolio reflects our commitment 
                                        to quality, taste, and consistency. We work closely with certified manufacturers and maintain rigorous 
                                        quality control throughout our supply chain.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right Column - Values */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Values</h3>
                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: <FaAward className="text-3xl" />,
                                            title: 'Quality First',
                                            desc: 'Every product undergoes strict quality checks to ensure international standards are met and exceeded.'
                                        },
                                        {
                                            icon: <FaLeaf className="text-3xl" />,
                                            title: 'Sustainability',
                                            desc: 'We are committed to sustainable sourcing and environmentally responsible practices.'
                                        },
                                        {
                                            icon: <FaGlobeAmericas className="text-3xl" />,
                                            title: 'Global Reach',
                                            desc: 'Serving 25+ countries with efficient logistics and timely delivery worldwide.'
                                        },
                                        {
                                            icon: <FaUsers className="text-3xl" />,
                                            title: 'Partnership',
                                            desc: 'Building long-term relationships with clients through transparency and trust.'
                                        }
                                    ].map((value, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                                            className="flex gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                                        >
                                            <div className="text-amber-500 flex-shrink-0">
                                                {value.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                                                <p className="text-white/70 text-sm leading-relaxed">{value.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Stats Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                        >
                            {[
                                { number: '50+', label: 'Products Exported' },
                                { number: '25+', label: 'Countries Served' },
                                { number: '100%', label: 'Quality Assured' },
                                { number: '10+', label: 'Years Experience' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                                    className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 backdrop-blur-sm"
                                >
                                    <h3 className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{stat.number}</h3>
                                    <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
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