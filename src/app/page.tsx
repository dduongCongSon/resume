import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav id="navbar" className={styles.navbar}>
        <div className={styles.logo}>My Portfolio</div>
        <ul className={styles.navLinks}>
          <li><a href="#welcome-section">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="welcome-section" className={styles.welcomeSection}>
        <div className={styles.welcomeContent}>
          <h1>Hi, I&apos;m Cong Son</h1>
          <p className={styles.subtitle}>Full Stack Web Developer</p>
          <p className={styles.description}>I create beautiful, responsive websites with modern technologies.</p>
          <div className={styles.ctaButtons}>
            <a href="#projects" className={`${styles.btn} ${styles.primaryBtn}`}>View My Work</a>
            <a href="#contact" className={`${styles.btn} ${styles.secondaryBtn}`}>Contact Me</a>
          </div>
        </div>
      </section>

      <section id="projects" className={styles.projects}>
        <h2>My Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectTile}>
            <div style={{ width: '100%', height: '200px', position: 'relative', backgroundColor: '#f0f0f0' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                E-commerce Website
              </div>
            </div>
            <h3>E-commerce Website</h3>
            <p>A full-featured online store with payment integration and inventory management.</p>
            <div className={styles.projectLinks}>
              <a href="#" className={styles.btn}>View Project</a>
              <a href="#" className={styles.btn}>Source Code</a>
            </div>
          </div>
          
          <div className={styles.projectTile}>
            <div style={{ width: '100%', height: '200px', position: 'relative', backgroundColor: '#f0f0f0' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                Task Management App
              </div>
            </div>
            <h3>Task Management App</h3>
            <p>A productivity app that helps users organize tasks and track progress.</p>
            <div className={styles.projectLinks}>
              <a href="#" className={styles.btn}>View Project</a>
              <a href="#" className={styles.btn}>Source Code</a>
            </div>
          </div>
          
          <div className={styles.projectTile}>
            <div style={{ width: '100%', height: '200px', position: 'relative', backgroundColor: '#f0f0f0' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                Weather Dashboard
              </div>
            </div>
            <h3>Weather Dashboard</h3>
            <p>A weather application that provides forecasts using a third-party API.</p>
            <div className={styles.projectLinks}>
              <a href="#" className={styles.btn}>View Project</a>
              <a href="#" className={styles.btn}>Source Code</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <h2>About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>I&apos;m a passionate web developer with 2 years of experience creating responsive and user-friendly websites. My expertise includes HTML, CSS, JavaScript, React, Node.js, and more.</p>
            <p>I enjoy solving complex problems and turning ideas into reality through code. When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.</p>
            <div className={styles.skills}>
              <h3>Skills</h3>
              <div className={styles.skillTags}>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Tailwind</span>
                <span>Git</span>
                <span>Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <h2>Get In Touch</h2>
        <div className={styles.contactContent}>
          <p>I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <i className="fas fa-envelope"></i>
              <p>sonduongcong8@gmail.com</p>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-phone"></i>
              <p>(+84) 818 954 955</p>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-map-marker-alt"></i>
              <p>Ho Chi Minh City</p>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://github.com/johndoe" id="profile-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 Cong Son. All rights reserved.</p>
      </footer>
    </div>
  );
}
