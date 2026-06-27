import './ContactMe.css'

function ContactMe() {
  return (
     <section class="contact fade-in-up" id="contact">
      <div class="container">
        <div class="section-title">
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </div>

        <div class="contact-content">
          <div class="contact-info">
            <h3>Let's Talk</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question about my work, want to discuss a
              potential collaboration, or just want to say hello, I'd love to
              hear from you.
            </p>
            <div class="contact-item">
              <div class="contact-icon"><i class="fas fa-envelope"></i></div>
              <div>
                <h4>Email</h4>
                <p>noutamr@gmail.com</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><i class="fas fa-phone"></i></div>
              <div>
                <h4>Phone</h4>
                <p>+201012312321</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Location</h4>
                <p>Egypt-Cairo</p>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <form
              id="contactForm"
              action="https://formspree.io/f/xblkegwr"
              method="POST"
            >
              <div class="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  required
                />
                <label for="name">Name</label>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                />
                <label for="email">Email</label>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder=" "
                  required
                />
                <label for="subject">Subject</label>
              </div>
              <div class="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  required
                ></textarea>
                <label for="message">Message</label>
              </div>
              <button type="submit" class="btn btn-primary">
                <i class="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;