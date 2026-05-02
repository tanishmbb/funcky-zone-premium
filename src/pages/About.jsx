import './About.css';

const About = () => {
  return (
    <div className="about-page fade-in">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>OUR STORY</h1>
          <p>BORN IN THE STREETS. MADE FOR THE BOLD.</p>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="philosophy section container text-center">
        <div className="philosophy-content mx-auto">
          <h2 className="mb-4">THE FUNCKY ZONE PHILOSOPHY</h2>
          <p className="mb-4">
            Funcky zone isn't just a clothing brand; it's a movement. We started with a simple idea: 
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
        <div className="break-image placeholder-img">
          Lifestyle Image
        </div>
      </section>

      {/* Values */}
      <section className="values section container">
        <div className="values-grid">
          <div className="value-card">
            <h3>01. AUTHENTICITY</h3>
            <p>We stay true to our roots. No compromises, no shortcuts. Just raw, unfiltered design.</p>
          </div>
          <div className="value-card">
            <h3>02. CRAFTSMANSHIP</h3>
            <p>Every stitch matters. We partner with the best manufacturers to deliver premium quality.</p>
          </div>
          <div className="value-card">
            <h3>03. COMMUNITY</h3>
            <p>We're nothing without our people. Funcky zone is a platform for creators, rebels, and visionaries.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
