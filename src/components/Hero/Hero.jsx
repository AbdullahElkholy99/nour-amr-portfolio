import "./Hero.css";

function Hero() {
  return (
    <section className="hero fade-in-up" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-left">
            <h1 className="animated-name" id="heroName">
              Nour Amr
            </h1>

 
            <p>
              I am a dedicated Data Entry Specialist with excellent typing speed
              and strong attention to detail. I specialize in accurate data
              entry, spreadsheet management, web research, data collection, and
              document conversion. My goal is to deliver reliable, organized,
              and high-quality work while meeting deadlines and maintaining data
              accuracy.
            </p>

            <div className="hero-buttons">
              <a href="#portfolio" className="btn btn-primary">
                View My Work
              </a>

              <a
                href="/assets/files/YourCV.pdf"
                download
                className="btn btn-outline"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-image fade-in-right">
<img
  src={`${import.meta.env.BASE_URL}assets/images/nouramr.jpeg`}
  alt="Nour Amr"
/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;