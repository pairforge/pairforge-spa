<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import './styles.css';

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
					<h2>About Us</h2>
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


