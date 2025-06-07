<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let currentSection = 'home';
	let sections = {};

	// Function to smoothly scroll to a section
	function scrollToSection(sectionId) {
		const element = document.getElementById(sectionId);
		element?.scrollIntoView({ behavior: 'smooth' });
		currentSection = sectionId;
	}

	// --- Form Submission ---
	function handleContactSubmit(event) {
		// Prevent default form submission.
		event.preventDefault();

		// In a real application, you would handle the form data here,
		// for example, by sending it to a backend server or a service like Formspree.
		alert('Thank you for your message! We will get back to you shortly.');

		// Optionally, reset the form after submission
		event.target.reset();
	}


	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Set the active navigation link
						currentSection = entry.target.id;
						// Add a 'visible' class for animations
						entry.target.classList.add('visible');
					}
				});
			},
			{
				rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
				threshold: 0
			}
		);

		// Observe all sections
		const sectionElements = document.querySelectorAll('section');
		sectionElements.forEach((section) => {
			sections[section.id] = { ref: section };
			observer.observe(section);
		});

		// Cleanup observer on component destroy
		return () => {
			sectionElements.forEach((section) => {
				observer.unobserve(section);
			});
		};
	});
</script>

<main>
	<nav class="navbar">
		<div class="nav-container">
			<div class="nav-logo">
				<h2>PairForge LLC</h2>
			</div>
			<ul class="nav-menu">
				<li><a href="#home" on:click|preventDefault={() => scrollToSection('home')} class:active={currentSection === 'home'}>Home</a></li>
				<li><a href="#services" on:click|preventDefault={() => scrollToSection('services')} class:active={currentSection === 'services'}>Services</a></li>
				<li><a href="#about" on:click|preventDefault={() => scrollToSection('about')} class:active={currentSection === 'about'}>About</a></li>
				<li><a href="#team" on:click|preventDefault={() => scrollToSection('team')} class:active={currentSection === 'team'}>Team</a></li>
				<li><a href="#contact" on:click|preventDefault={() => scrollToSection('contact')} class:active={currentSection === 'contact'}>Contact</a></li>
			</ul>
		</div>
	</nav>

	<section id="home" class="hero">
		<div class="hero-overlay"></div>
		<div class="hero-content">
			<div transition:fly={{ y: 20, duration: 800 }}>
				<h1>PairForge LLC</h1>
				<h2>Elite Software Engineering Solutions</h2>
				<p>
					We craft exceptional software solutions through collaborative engineering, modern
					technologies, and agile methodologies. Partner with us to forge your digital future.
				</p>
				<div class="hero-buttons">
					<button class="btn btn-primary" on:click={() => scrollToSection('services')}>Our Services</button>
					<button class="btn btn-secondary" on:click={() => scrollToSection('contact')}>Get Started</button>
				</div>
			</div>
		</div>
	</section>

	<section id="services" class="services">
		<div class="container">
			<h2>Our Services</h2>
			<p class="section-subtitle">Comprehensive software engineering solutions tailored to your needs</p>
			<div class="services-grid">
				<div class="service-card">
					<div class="service-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
					</div>
					<h3>Full-Stack Development</h3>
					<p>
						Modern web applications using cutting-edge technologies like React, Vue, Svelte,
						Node.js, and cloud platforms.
					</p>
				</div>
				<div class="service-card">
					<div class="service-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
					</div>
					<h3>Mobile Development</h3>
					<p>
						Native and cross-platform mobile applications for iOS and Android using React Native,
						Flutter, and Swift/Kotlin.
					</p>
				</div>
				<div class="service-card">
					<div class="service-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
					</div>
					<h3>Cloud & DevOps</h3>
					<p>
						Scalable cloud infrastructure, CI/CD pipelines, and DevOps solutions on AWS, Azure, and
						Google Cloud.
					</p>
				</div>
				<div class="service-card">
					<div class="service-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"></path><rect x="4" y="4" width="16" height="16"></rect><path d="M12 12v4h4"></path></svg>
					</div>
					<h3>AI & Machine Learning</h3>
					<p>
						Intelligent solutions powered by AI/ML, including natural language processing, computer
						vision, and predictive analytics.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="about" class="about">
		<div class="container">
			<div class="about-content">
				<div class="about-text">
					<h2>About PairForge LLC</h2>
					<p>
						Founded on the principles of collaborative engineering and technical excellence,
						PairForge LLC is a premier software development consultancy that specializes in
						building innovative, scalable, and maintainable software solutions.
					</p>
					<p>
						Our name reflects our core philosophy: just as a blacksmith pairs skill with fire to
						forge metal, we pair deep technical expertise with creative problem-solving to forge
						exceptional software.
					</p>

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

	<section id="team" class="team">
		<div class="container">
			<h2>Our Team</h2>
			<p class="section-subtitle">Meet the engineers behind PairForge</p>
			<div class="team-grid">
				<div class="team-member">
					<div class="member-avatar">
						<img src="http://googleusercontent.com/image_generation_content/1" alt="Alex Chen, Founding Partner & CTO" />
					</div>
					<h3>Alex Chen</h3>
					<p class="role">Founding Partner & CTO</p>
					<p>Full-stack engineer with 8+ years experience in scalable web applications and cloud architecture.</p>
					<div class="member-links">
						<a href="#" class="link">LinkedIn</a>
						<a href="#" class="link">GitHub</a>
					</div>
				</div>
				<div class="team-member">
					<div class="member-avatar">
						<img src="http://googleusercontent.com/image_generation_content/2" alt="Sarah Rodriguez, Founding Partner & Lead Engineer" />
					</div>
					<h3>Sarah Rodriguez</h3>
					<p class="role">Founding Partner & Lead Engineer</p>
					<p>
						Expert in modern frontend frameworks and mobile development with a passion for user experience.
					</p>
					<div class="member-links">
						<a href="#" class="link">LinkedIn</a>
						<a href="#" class="link">GitHub</a>
					</div>
				</div>
				<div class="team-member">
					<div class="member-avatar">
						<img src="http://googleusercontent.com/image_generation_content/3" alt="Michael Johnson, Senior DevOps Engineer" />
					</div>
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

	<section id="contact" class="contact">
		<div class="container">
			<h2>Let's Build Something Amazing Together</h2>
			<p class="section-subtitle">Ready to start your next project? We'd love to hear from you.</p>

			<div class="contact-content">
				<div class="contact-info">
					<div class="contact-item">
						<div class="contact-icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
						</div>
						<div>
							<h3>Email</h3>
							<p>hello@pairforge.com</p>
						</div>
					</div>
					<div class="contact-item">
						<div class="contact-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
						</div>
						<div>
							<h3>Phone</h3>
							<p>+1 (555) 123-4567</p>
						</div>
					</div>
					<div class="contact-item">
						<div class="contact-icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
						</div>
						<div>
							<h3>Location</h3>
							<p>San Francisco, CA</p>
						</div>
					</div>
				</div>

				<form class="contact-form" on:submit={handleContactSubmit}>
					<div class="form-group">
						<input type="text" placeholder="Your Name" required />
					</div>
					<div class="form-group">
						<input type="email" placeholder="Your Email" required />
					</div>
					<div class="form-group">
						<input type="text" placeholder="Company (Optional)" />
					</div>
					<div class="form-group">
						<textarea placeholder="Tell us about your project..." rows="5" required></textarea>
					</div>
					<button type="submit" class="btn btn-primary">Send Message</button>
				</form>
			</div>
		</div>
	</section>

	<footer class="footer">
		<div class="container">
			<div class="footer-content">
				<div class="footer-section">
					<h3>PairForge LLC</h3>
					<p>Forging the future of software, one line of code at a time.</p>
				</div>
				<div class="footer-section">
					<h4>Company</h4>
					<ul>
						<li><a href="#about" on:click|preventDefault={() => scrollToSection('about')}>About Us</a></li>
						<li><a href="#team" on:click|preventDefault={() => scrollToSection('team')}>Our Team</a></li>
						<li><a href="#contact" on:click|preventDefault={() => scrollToSection('contact')}>Contact</a></li>
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
				<p>&copy; 2025 PairForge LLC. All rights reserved.</p>
			</div>
		</div>
	</footer>
</main>

<style>
	:root {
		--primary-color: #6366F1; /* Indigo-500 - sophisticated primary */
		--primary-hover: #4F46E5; /* Indigo-600 */
		--secondary-color: #1F2937; /* Gray-800 */
		--accent-color: #F59E0B; /* Amber-500 - warm accent */
		--text-dark: #F9FAFB; /* Gray-50 - light text */
		--text-light: #9CA3AF; /* Gray-400 - subtle text */
		--background-light: #0F172A; /* Slate-900 - deep dark */
		--background-white: #1E293B; /* Slate-800 - card background */
		--border-color: #334155; /* Slate-700 - subtle borders */
		--header-font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		--body-font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	:global(body) {
		margin: 0;
		font-family: var(--body-font);
		line-height: 1.6;
		color: var(--text-dark);
		background-color: var(--background-white);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(*) {
		box-sizing: border-box;
	}

	h1, h2, h3, h4 {
		font-family: var(--header-font);
		font-weight: 800;
		color: var(--text-dark);
		line-height: 1.2;
		letter-spacing: -0.02em;
	}

	main {
		width: 100%;
		overflow-x: hidden;
	}

	section {
		padding: 8rem 2rem;
		opacity: 1;
		transform: translateY(0);
		transition: opacity 0.8s ease-out, transform 0.8s ease-out;
	}

	section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.section-subtitle {
		text-align: center;
		font-size: 1.25rem;
		color: var(--text-light);
		max-width: 700px;
		margin: 1.5rem auto 5rem;
		line-height: 1.6;
		font-weight: 400;
	}

	/* Navigation */
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: rgba(15, 23, 42, 0.95);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(51, 65, 85, 0.3);
		z-index: 1000;
		padding: 1.5rem 0;
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
		font-weight: 800;
		font-size: 1.5rem;
		letter-spacing: -0.02em;
	}

	.nav-menu {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 3rem;
	}

	.nav-menu a {
		text-decoration: none;
		color: var(--text-light);
		font-weight: 500;
		font-size: 0.95rem;
		transition: all 0.2s ease;
		padding-bottom: 2px;
		position: relative;
	}

	.nav-menu a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--primary-color);
		transition: width 0.3s ease;
	}

	.nav-menu a:hover,
	.nav-menu a.active {
		color: var(--text-dark);
	}

	.nav-menu a:hover::after,
	.nav-menu a.active::after {
		width: 100%;
	}

	/* Hero Section */
	.hero {
		min-height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: white;
		position: relative;
		padding: 8rem 2rem 6rem;
		background: linear-gradient(135deg, var(--background-light) 0%, var(--background-white) 100%);
		opacity: 1 !important;
		transform: translateY(0) !important;
	}

	.hero-overlay {
		display: none;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		max-width: 800px;
	}

	.hero h1 {
		font-size: clamp(3rem, 6vw, 5rem);
		color: var(--text-dark);
		font-weight: 900;
		margin-bottom: 1.5rem;
		letter-spacing: -0.03em;
		line-height: 1.1;
	}

	.hero h2 {
		font-size: clamp(1.25rem, 3vw, 1.75rem);
		color: var(--primary-color);
		font-weight: 600;
		margin-bottom: 2rem;
		letter-spacing: -0.01em;
	}

	.hero p {
		font-size: 1.125rem;
		margin-bottom: 3rem;
		color: var(--text-light);
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		line-height: 1.6;
	}

	.hero-buttons {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.btn {
		padding: 1rem 2.5rem;
		border: none;
		border-radius: 12px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		text-decoration: none;
		display: inline-block;
		position: relative;
		overflow: hidden;
	}

	.btn-primary {
		background: var(--primary-color);
		color: white;
		box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
	}

	.btn-primary:hover {
		background: var(--primary-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(99, 102, 241, 0.4);
	}

	.btn-secondary {
		background: transparent;
		color: var(--text-light);
		border: 2px solid var(--border-color);
	}

	.btn-secondary:hover {
		background: var(--background-white);
		color: var(--text-dark);
		border-color: var(--primary-color);
		transform: translateY(-2px);
	}

	/* Services Section */
	.services {
		background: var(--background-light);
		padding: 8rem 2rem;
	}

	.services.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.services h2 {
		text-align: center;
		font-size: clamp(2.5rem, 4vw, 3.5rem);
		margin-bottom: 1rem;
		font-weight: 800;
		letter-spacing: -0.02em;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 3rem;
		margin-top: 4rem;
	}

	.service-card {
		background: var(--background-white);
		padding: 3rem 2.5rem;
		border-radius: 20px;
		box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		border: 1px solid var(--border-color);
		text-align: center;
		position: relative;
		overflow: hidden;
	}

	.service-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}

	.service-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
	}

	.service-card:hover::before {
		transform: scaleX(1);
	}

	.service-icon {
		color: var(--primary-color);
		margin-bottom: 2rem;
		display: flex;
		justify-content: center;
	}

	.service-card h3 {
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -0.01em;
	}

	.service-card p {
		color: var(--text-light);
		line-height: 1.7;
		font-size: 1.05rem;
	}

	/* About Section */
	.about {
		background: var(--background-white);
	}

	.about-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 5rem;
		align-items: center;
	}

	.about h2 {
		font-size: clamp(2.5rem, 4vw, 3.5rem);
		margin-bottom: 2rem;
		font-weight: 800;
		letter-spacing: -0.02em;
	}

	.about p {
		color: var(--text-light);
		margin-bottom: 2rem;
		font-size: 1.125rem;
		line-height: 1.7;
	}

	.stats {
		display: flex;
		gap: 3rem;
		margin-top: 2rem;
	}

	.stat h3 {
		font-size: 2.5rem;
		color: var(--primary-color);
		margin: 0;
	}

	.stat p {
		color: var(--text-light);
		margin: 0.5rem 0 0 0;
		font-size: 0.9rem;
	}

	.tech-stack {
		background: var(--background-white);
		padding: 2rem;
		border-radius: 12px;
		border: 1px solid var(--border-color);
	}

	.tech-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.tech-badge {
		background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
		color: white;
		padding: 0.75rem 1.25rem;
		border-radius: 25px;
		font-size: 0.875rem;
		font-weight: 600;
		transition: transform 0.2s ease;
	}

	.tech-badge:hover {
		transform: translateY(-2px);
	}

	/* Team Section */
	.team {
		background: var(--background-light);
	}

	.team h2 {
		text-align: center;
		font-size: 2.5rem;
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.team-member {
		background: var(--background-white);
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
		border: 1px solid var(--border-color);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.team-member:hover {
		transform: translateY(-8px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
	}

	.member-avatar {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto 1.5rem;
		border: 4px solid var(--primary-color);
	}

	.member-avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.role {
		color: var(--primary-color);
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.member-links a {
		color: var(--text-light);
		text-decoration: none;
		margin: 0 0.5rem;
		transition: color 0.3s ease;
	}

	.member-links a:hover {
		color: var(--primary-color);
	}

	/* Contact Section */
	.contact {
		background: var(--background-white);
	}

	.contact h2 {
		text-align: center;
		font-size: 2.5rem;
	}

	.contact-content {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 4rem;
		align-items: flex-start;
	}

	.contact-item {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.contact-icon {
		color: var(--primary-color);
		flex-shrink: 0;
		margin-top: 4px;
	}

	.contact-info p {
		margin: 0;
		color: var(--text-light);
	}

	.contact-info h3 {
		margin: 0 0 0.5rem 0;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 0.85rem 1rem;
		border: 1px solid var(--border-color);
		border-radius: 8px;
		font-size: 1rem;
		font-family: inherit;
		transition: border-color 0.3s, box-shadow 0.3s;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--primary-color);
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
	}

	.contact-form .btn-primary {
		width: 100%;
	}

	/* Footer */
	.footer {
		background: var(--background-white);
		color: var(--text-light);
		padding: 4rem 2rem 2rem;
		border-top: 1px solid var(--border-color);
	}

	.footer-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.footer-section h3,
	.footer-section h4 {
		color: var(--text-dark);
		margin-bottom: 1.5rem;
	}

	.footer-section p {
		color: var(--text-light);
	}

	.footer-section ul {
		list-style: none;
		padding: 0;
	}

	.footer-section li {
		margin-bottom: 0.75rem;
	}

	.footer-section a {
		color: var(--text-light);
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.footer-section a:hover {
		color: var(--primary-color);
	}

	.social-links {
		display: flex;
		gap: 1rem;
	}

	.footer-bottom {
		border-top: 1px solid var(--border-color);
		padding-top: 2rem;
		text-align: center;
		color: var(--text-light);
	}

	/* Responsive Design */
	@media (max-width: 992px) {
		.about-content,
		.contact-content {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.about-text {
			text-align: center;
		}

		.stats {
			justify-content: center;
		}
	}

	@media (max-width: 768px) {
		section {
			padding: 4rem 1rem;
		}

		.nav-container {
			padding: 0 1rem;
		}

		.nav-menu {
			display: none; /* Simple hiding for mobile, could be replaced with a hamburger menu */
		}

		.hero-content {
			padding: 0 1rem;
		}
	}
</style>
