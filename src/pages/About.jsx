import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    num: '01',
    title: 'Authenticity',
    desc: 'We stay true to our roots. No compromises, no shortcuts. Just raw, unfiltered design that speaks for itself.',
  },
  {
    num: '02',
    title: 'Craftsmanship',
    desc: 'Every stitch matters. We partner with the best manufacturers to deliver premium quality you can feel.',
  },
  {
    num: '03',
    title: 'Community',
    desc: 'We\'re nothing without our people. Funcky Zone is a platform for creators, rebels, and visionaries.',
  },
];

const About = () => {
  return (
    <div className="about-page fade-in">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-content">
          <h1>Our Story</h1>
          <p>Born in the streets. Made for the bold.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy section container text-center">
        <div className="philosophy-content">
          <span className="section-label">The Funcky Zone Philosophy</span>
          <h2 className="section-title mb-8">More Than Clothing</h2>
          <p className="mb-4">
            Funcky Zone isn't just a clothing brand — it's a movement. We started with a simple idea:
            to create streetwear that speaks louder than words. Every piece we design is an
            extension of individuality, crafted for those who aren't afraid to stand out.
          </p>
          <p>
            We believe in quality over quantity. Our garments are meticulously designed and
            responsibly sourced, ensuring that you not only look good but feel good about what you wear.
          </p>
        </div>
      </section>

      {/* Visual Break */}
      <section className="visual-break">
        <div className="visual-break-inner" />
      </section>

      {/* Values */}
      <section className="values section container">
        <div className="values-header">
          <span className="section-label">What We Stand For</span>
          <h2 className="section-title">Our Values</h2>
        </div>
        <div className="values-grid">
          {values.map((v) => (
            <div className="value-card" key={v.num}>
              <div className="value-number">{v.num}</div>
              <h3>{v.title.toUpperCase()}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to wear your identity?</h2>
          <Link to="/shop" className="btn-primary">Shop the Collection</Link>
        </div>
      </section>

    </div>
  );
};

export default About;
