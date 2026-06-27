import './socialLinks.css'

function SocialLinks() {
  return (
      <div class="social-links">
        <a
          href="#"
          class="social-link"
          target="_blank"
          ><i class="fab fa-github"></i
        ></a>
        <a
          href="#"
          class="social-link"
          target="_blank"
          ><i class="fab fa-linkedin"></i
        ></a>
          <a href="#" class="social-link" target="_blank"><i class="fab fa-twitter"></i></a> 
        <a href="#" class="social-link"
          ><i class="fas fa-envelope"></i
        ></a>
      </div>

  );
}

export default SocialLinks;