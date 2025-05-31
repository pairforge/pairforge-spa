<script>
  import { onMount } from 'svelte';

  let currentSection = 'home';

  function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    currentSection = sectionId;
  }

  onMount(() => {
    // Handle scroll for active nav
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'team', 'contact'];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            currentSection = section;
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<main>
  <!-- Navigation -->
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <h2>PairForge LLC</h2>
      </div>
      <ul class="nav-menu">
        <li><a href="#home" on:click={() => scrollToSection('home')} class:active={currentSection === 'home'}>Home</a></li>
        <li><a href="#services" on:click={() => scrollToSection('services')} class:active={currentSection === 'services'}>Services</a></li>
        <li><a href="#about" on:click={() => scrollToSection('about')} class:active={currentSection === 'about'}>About</a></li>
        <li><a href="#team" on:click={() => scrollToSection('team')} class:active={currentSection === 'team'}>Team</a></li>
        <li><a href="#contact" on:click={() => scrollToSection('contact')} class:active={currentSection === 'contact'}>Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>PairForge LLC</h1>
      <h2>Elite Software Engineering Solutions</h2>
      <p>We craft exceptional software solutions through collaborative engineering, modern technologies, and agile methodologies. Partner with us to forge your digital future.</p>
      <div class="hero-buttons">
        <button class="btn btn-primary" on:click={() => scrollToSection('services')}>Our Services</button>
        <button class="btn btn-secondary" on:click={() => scrollToSection('contact')}>Get Started</button>
      </div>
    </div>
    <div class="hero-visual">
      <div class="code-animation">
        <div class="code-line">{'<PairForge>'}</div>
        <div class="code-line">{'  innovation()'}</div>
        <div class="code-line">{'  collaboration()'}</div>
        <div class="code-line">{'  excellence()'}</div>
        <div class="code-line">{'</PairForge>'}</div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="services">
    <div class="container">
      <h2>Our Services</h2>
      <p class="section-subtitle">Comprehensive software engineering solutions tailored to your needs</p>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🚀</div>
          <h3>Full-Stack Development</h3>
          <p>Modern web applications using cutting-edge technologies like React, Vue, Svelte, Node.js, and cloud platforms.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">📱</div>
          <h3>Mobile Development</h3>
          <p>Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift/Kotlin.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">☁️</div>
          <h3>Cloud & DevOps</h3>
          <p>Scalable cloud infrastructure, CI/CD pipelines, and DevOps solutions on AWS, Azure, and Google Cloud.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">🤖</div>
          <h3>AI & Machine Learning</h3>
          <p>Intelligent solutions powered by AI/ML, including natural language processing, computer vision, and predictive analytics.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">🔧</div>
          <h3>Technical Consulting</h3>
          <p>Expert guidance on architecture decisions, technology stack selection, and engineering best practices.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">⚡</div>
          <h3>Performance Optimization</h3>
          <p>Code audits, performance tuning, and scalability improvements for existing applications and systems.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2>About PairForge LLC</h2>
          <p>Founded on the principles of collaborative engineering and technical excellence, PairForge LLC is a premier software development consultancy that specializes in building innovative, scalable, and maintainable software solutions.</p>
          <p>Our name reflects our core philosophy: just as a blacksmith pairs skill with fire to forge metal, we pair deep technical expertise with creative problem-solving to forge exceptional software.</p>

          <div class="stats">
            <div class="stat">
              <h3>50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div class="stat">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div class="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
        <div class="about-visual">
          <div class="tech-stack">
            <h3>Our Tech Stack</h3>
            <div class="tech-badges">
              <span class="tech-badge">JavaScript</span>
              <span class="tech-badge">TypeScript</span>
              <span class="tech-badge">React</span>
              <span class="tech-badge">Svelte</span>
              <span class="tech-badge">Node.js</span>
              <span class="tech-badge">Python</span>
              <span class="tech-badge">Go</span>
              <span class="tech-badge">AWS</span>
              <span class="tech-badge">Docker</span>
              <span class="tech-badge">PostgreSQL</span>
              <span class="tech-badge">MongoDB</span>
              <span class="tech-badge">Redis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section id="team" class="team">
    <div class="container">
      <h2>Our Team</h2>
      <p class="section-subtitle">Meet the engineers behind PairForge</p>
      <div class="team-grid">
        <div class="team-member">
          <div class="member-avatar">👨‍💻</div>
          <h3>Alex Chen</h3>
          <p class="role">Founding Partner & CTO</p>
          <p>Full-stack engineer with 8+ years experience in scalable web applications and cloud architecture.</p>
          <div class="member-links">
            <a href="#" class="link">LinkedIn</a>
            <a href="#" class="link">GitHub</a>
          </div>
        </div>
        <div class="team-member">
          <div class="member-avatar">👩‍💻</div>
          <h3>Sarah Rodriguez</h3>
          <p class="role">Founding Partner & Lead Engineer</p>
          <p>Expert in modern frontend frameworks and mobile development with a passion for user experience.</p>
          <div class="member-links">
            <a href="#" class="link">LinkedIn</a>
            <a href="#" class="link">GitHub</a>
          </div>
        </div>
        <div class="team-member">
          <div class="member-avatar">👨‍💻</div>
          <h3>Michael Johnson</h3>
          <p class="role">Senior DevOps Engineer</p>
          <p>Cloud infrastructure specialist with expertise in Kubernetes, CI/CD, and site reliability engineering.</p>
          <div class="member-links">
            <a href="#" class="link">LinkedIn</a>
            <a href="#" class="link">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="container">
      <h2>Let's Build Something Amazing Together</h2>
      <p class="section-subtitle">Ready to start your next project? We'd love to hear from you.</p>

      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>hello@pairforge.com</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div>
              <h3>Location</h3>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <form class="contact-form">
          <div class="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div class="form-group">
            <input type="text" placeholder="Company" />
          </div>
          <div class="form-group">
            <select required>
              <option value="">Select Service</option>
              <option value="full-stack">Full-Stack Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="cloud">Cloud & DevOps</option>
              <option value="ai">AI & Machine Learning</option>
              <option value="consulting">Technical Consulting</option>
              <option value="optimization">Performance Optimization</option>
            </select>
          </div>
          <div class="form-group">
            <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>PairForge LLC</h3>
          <p>Forging the future of software, one line of code at a time.</p>
        </div>
        <div class="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Full-Stack Development</a></li>
            <li><a href="#services">Mobile Development</a></li>
            <li><a href="#services">Cloud & DevOps</a></li>
            <li><a href="#services">AI & Machine Learning</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Connect</h4>
          <div class="social-links">
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">GitHub</a>
            <a href="#" class="social-link">Twitter</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 PairForge LLC. All rights reserved.</p>
      </div>
    </div>
  </footer>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: #333;
    scroll-behavior: smooth;
  }

  :global(*) {
    box-sizing: border-box;
  }

  /* Navigation */
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #e1e5e9;
    z-index: 1000;
    padding: 1rem 0;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .nav-logo h2 {
    margin: 0;
    color: #2d3748;
    font-weight: 700;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
  }

  .nav-menu a {
    text-decoration: none;
    color: #4a5568;
    font-weight: 500;
    transition: color 0.3s ease;
    cursor: pointer;
  }

  .nav-menu a:hover,
  .nav-menu a.active {
    color: #3182ce;
  }

  /* Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Hero Section */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 6rem 2rem 2rem;
  }

  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-content h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    line-height: 1.2;
  }

  .hero-content h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 0 1.5rem 0;
    opacity: 0.9;
  }

  .hero-content p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
  }

  .btn {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
  }

  .btn-primary {
    background: #3182ce;
    color: white;
  }

  .btn-primary:hover {
    background: #2c5aa0;
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .btn-secondary:hover {
    background: white;
    color: #667eea;
  }

  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .code-animation {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    padding: 2rem;
    font-family: 'Monaco', 'Menlo', monospace;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .code-line {
    color: #64ffda;
    margin: 0.5rem 0;
    font-size: 1.1rem;
    animation: glow 2s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from { opacity: 0.8; }
    to { opacity: 1; }
  }

  /* Services Section */
  .services {
    padding: 6rem 0;
    background: #f7fafc;
  }

  .services h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #2d3748;
  }

  .section-subtitle {
    text-align: center;
    font-size: 1.2rem;
    color: #4a5568;
    margin-bottom: 4rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .service-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
    border: 1px solid #e2e8f0;
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .service-card h3 {
    color: #2d3748;
    margin-bottom: 1rem;
  }

  .service-card p {
    color: #4a5568;
    line-height: 1.6;
  }

  /* About Section */
  .about {
    padding: 6rem 0;
  }

  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .about h2 {
    font-size: 2.5rem;
    color: #2d3748;
    margin-bottom: 1.5rem;
  }

  .about p {
    color: #4a5568;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .stats {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
  }

  .stat {
    text-align: center;
  }

  .stat h3 {
    font-size: 2.5rem;
    color: #3182ce;
    margin: 0;
  }

  .stat p {
    color: #4a5568;
    margin: 0.5rem 0 0 0;
    font-size: 0.9rem;
  }

  .tech-stack {
    background: #f7fafc;
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
  }

  .tech-stack h3 {
    margin-bottom: 1.5rem;
    color: #2d3748;
  }

  .tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-badge {
    background: #3182ce;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  /* Team Section */
  .team {
    padding: 6rem 0;
    background: #f7fafc;
  }

  .team h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #2d3748;
    margin-bottom: 1rem;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 4rem;
  }

  .team-member {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
  }

  .member-avatar {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .team-member h3 {
    color: #2d3748;
    margin-bottom: 0.5rem;
  }

  .role {
    color: #3182ce;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .member-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .link {
    color: #3182ce;
    text-decoration: none;
    font-weight: 500;
  }

  .link:hover {
    text-decoration: underline;
  }

  /* Contact Section */
  .contact {
    padding: 6rem 0;
  }

  .contact h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #2d3748;
    margin-bottom: 1rem;
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 4rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .contact-icon {
    font-size: 2rem;
  }

  .contact-form {
    background: #f7fafc;
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
  }

  /* Footer */
  .footer {
    background: #2d3748;
    color: white;
    padding: 3rem 0 1rem;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-section h3,
  .footer-section h4 {
    margin-bottom: 1rem;
  }

  .footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-section li {
    margin-bottom: 0.5rem;
  }

  .footer-section a {
    color: #cbd5e0;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-section a:hover {
    color: white;
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    color: #cbd5e0;
    text-decoration: none;
    font-weight: 500;
  }

  .social-link:hover {
    color: white;
  }

  .footer-bottom {
    border-top: 1px solid #4a5568;
    padding-top: 1rem;
    text-align: center;
    color: #cbd5e0;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .nav-container {
      padding: 0 1rem;
    }

    .nav-menu {
      gap: 1rem;
    }

    .hero-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }

    .hero-content h1 {
      font-size: 2.5rem;
    }

    .about-content,
    .contact-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }

    .stats {
      justify-content: center;
    }

    .container {
      padding: 0 1rem;
    }
  }
</style>
