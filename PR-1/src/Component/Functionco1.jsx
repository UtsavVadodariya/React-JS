import React from 'react';

export default function Functionco1() {
    return (
        <div>
            <section className="main-content">
                <h1>Welcome to My Website</h1>
                <p>This is a sample web page designed for a competition. It includes a navbar, main content section, and a footer.</p>
                <img src="/4.jpeg" alt="Sample Image" />
            </section>
            <section className="features">
                <h2>Our Features</h2>
                <p>Discover the amazing features we offer. Each card below highlights a different aspect of our services, showcasing our commitment to quality and innovation.</p>
                <div className="feature-cards">
                    <div className="feature-card">
                        <img src="/feature.webp" alt="Feature 1" />
                        <h3>Feature One</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non dolor vitae purus ultrices tristique.</p>
                    </div>
                    <div className="feature-card">
                        <img src="/feature1.jpg" alt="Feature 2" />
                        <h3>Feature Two</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non dolor vitae purus ultrices tristique.</p>
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <p>We value feedback from our clients. Here's what they have to say about our services.</p>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <img src="/1.webp" alt="Client 1" />
                        <blockquote>"The service was fantastic! Highly recommend to everyone."</blockquote>
                    </div>
                    <div className="testimonial-card">
                        <img src="/2.jpg" alt="Client 2" />
                        <blockquote>"A wonderful experience from start to finish. The team exceeded our expectations."</blockquote>
                    </div>
                    <div className="testimonial-card">
                        <img src="/3.webp" alt="Client 3" />
                        <blockquote>"Professional and reliable. We are very satisfied with the results."</blockquote>
                    </div>
                </div>
            </section>
        </div>
    );
}
