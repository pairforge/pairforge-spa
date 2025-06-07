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
				<h2>PairForge</h2>
			</div>
			<ul class="nav-menu">
				<li><a href="#home" on:click|preventDefault={() => scrollToSection('home')} class:active={currentSection === 'home'}>Home</a></li>
				<li><a href="#services" on:click|preventDefault={() => scrollToSection('services')} class:active={currentSection === 'services'}>Services</a></li>
				<li><a href="#about" on:click|preventDefault={() => scrollToSection('about')} class:active={currentSection === 'about'}>About</a></li>
				<li><a href="#contact" on:click|preventDefault={() => scrollToSection('contact')} class:active={currentSection === 'contact'}>Contact</a></li>
			</ul>
		</div>
	</nav>

	<section id="home" class="hero">
		<div class="hero-overlay"></div>
		<div class="hero-content">
			<div transition:fly={{ y: 20, duration: 800 }}>
				<h1>PairForge</h1>
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
						Modern web applications using Ruby on Rails, NodeJS and Django.
					</p>
				</div>
				<div class="service-card">
					<div class="service-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
					</div>
					<h3>Cloud & DevOps</h3>
					<p>
						Scalable cloud infrastructure, CI/CD pipelines, and DevOps solutions on Google Cloud and AWS.
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
						Our name reflects our core philosophy: just as a blacksmith pairs skill with fire to
						forge metal, we pair deep technical expertise with creative problem-solving to forge
						exceptional software.
					</p>

				</div>
				<div class="about-visual">
					<div class="tech-stack">
						<h3>Our Tech Stack</h3>
						<div class="tech-badges">
							<span class="tech-badge">Ruby</span>
							<span class="tech-badge">Python</span>
							<span class="tech-badge">GCP</span>
							<span class="tech-badge">JavaScript</span>
							<span class="tech-badge">React</span>
							<span class="tech-badge">Node.js</span>
							<span class="tech-badge">Kafka</span>
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

	<section id="contact" class="contact">
		<div class="container">
			<h2>Let's build something amazing together</h2>
			<p class="section-subtitle">Ready to start your next project? We'd love to hear from you.</p>

			<div class="contact-content">

				<form class="contact-form" on:submit={handleContactSubmit}>
					<div class="form-group">
						<input type="email" placeholder="Your Email" required />
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
		background-color: var(--background-light);
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
		padding: 5rem 2rem;
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
		padding: 6rem 2rem 4rem;
		background: var(--background-light);
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
		padding: 5rem 2rem;
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
		transition: transform 0.2s ease, box-shadow 0.2s ease;
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
		transition: transform 0.25s ease;
		transform-origin: left;
	}

	.service-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
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
		background: var(--background-light);
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
		justify-content: center;
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
		background: var(--background-light);
	}

	.contact h2 {
		text-align: center;
		font-size: 2.5rem;
	}

	.contact-content {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.contact-form {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
	}



	.form-group {
		margin-bottom: 2rem;
	}

	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 1rem 1.25rem;
		border: 2px solid var(--border-color);
		border-radius: 12px;
		font-size: 1rem;
		font-family: inherit;
		background: var(--background-white);
		color: var(--text-dark);
		transition: all 0.2s ease;
		resize: vertical;
	}

	.form-group input::placeholder,
	.form-group textarea::placeholder {
		color: var(--text-light);
		opacity: 0.8;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--primary-color);
		box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
		background: var(--background-white);
	}

	.form-group textarea {
		min-height: 120px;
	}

	.contact-form .btn-primary {
		width: 100%;
		padding: 1.25rem 2rem;
		font-size: 1.1rem;
		font-weight: 700;
		margin-top: 1rem;
	}

	/* Footer */
	.footer {
		background: var(--background-light);
		color: var(--text-light);
		padding: 4rem 2rem 2rem;
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
		padding-top: 2rem;
		text-align: center;
		color: var(--text-light);
	}

	/* Responsive Design */
	@media (max-width: 992px) {
		.about-content {
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
