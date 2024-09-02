import React from 'react';

export default function Functionco1() {
    return (
        <div>
            <section className="main-content">
                <h1>Welcome to My Website</h1>
                <p>This is a sample web page designed for a competition. It includes a navbar, main content section, and a footer.</p>
                <img src="https://via.placeholder.com/600x400" alt="Sample Image" />
            </section>
            <section className="features">
                <h2>Our Features</h2>
                <p>Discover the amazing features we offer. Each card below highlights a different aspect of our services, showcasing our commitment to quality and innovation.</p>
                <div className="feature-cards">
                    <div className="feature-card">
                        <img src="https://via.placeholder.com/300x200" alt="Feature 1" />
                        <h3>Feature One</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non dolor vitae purus ultrices tristique.</p>
                    </div>
                    <div className="feature-card">
                        <img src="https://via.placeholder.com/300x200" alt="Feature 2" />
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
                        <img src="https://via.placeholder.com/80x80" alt="Client 1" />
                        <blockquote>"The service was fantastic! Highly recommend to everyone."</blockquote>
                        <footer>— Jane Doe, CEO of Company</footer>
                    </div>
                    <div className="testimonial-card">
                        <img src="https://via.placeholder.com/80x80" alt="Client 2" />
                        <blockquote>"A wonderful experience from start to finish. The team exceeded our expectations."</blockquote>
                        <footer>— John Smith, Director at Firm</footer>
                    </div>
                    <div className="testimonial-card">
                        <img src="https://via.placeholder.com/80x80" alt="Client 3" />
                        <blockquote>"Professional and reliable. We are very satisfied with the results."</blockquote>
                        <footer>— Emily Johnson, Manager at Business</footer>
                    </div>
                </div>
            </section>
        </div>
    );
}
