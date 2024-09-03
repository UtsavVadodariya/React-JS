import React from 'react';

export default function Functionco1() {
    return (
        <div>
            <section className="main-content">
                <h1>We bulid beautiful digital experiences</h1>
                <p>A beautiful and easy to use template that lets you create the perfect website for your future agency or business.</p>
                <img src="/4.jpeg" alt=" " />
            </section>
            <section className="features">
                <h2>Our Features</h2>
                <p>Discover the amazing features we offer. Each card below highlights a different aspect of our services, showcasing our commitment to quality and innovation.</p>
                <div className="feature-cards">
                    <div className="feature-card">
                        <img src="/feature.webp" alt="Feature 1" />
                        <h3>Launch Quickly</h3>
                        <p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris.</p>
                    </div>
                    <div className="feature-card">
                        <img src="/feature1.jpg" alt="Feature 2" />
                        <h3>Stylish Design</h3>
                        <p> Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin.</p>
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <p>We value feedback from our clients. Here's what they have to say about our services.</p>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <img src="/1.webp"  alt="Client 1" />
                        <p>"The service was fantastic! Highly recommend to everyone."</p>
                    </div>
                    <div className="testimonial-card">
                        <img src="/2.jpg" alt="Client 2" />
                        <p>"A wonderful experience from start to finish. The team exceeded our expectations."</p>
                    </div>
                    <div className="testimonial-card">
                        <img src="/3.webp" alt="Client 3" />
                        <p>"Professional and reliable. We are very satisfied with the results."</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
