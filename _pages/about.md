---
permalink: /
title: "About Me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  /* --- HIDE DEFAULT PAGE TITLE --- */
  .page__title {
    display: none;
  }

  /* --- Main container for the new layout --- */
  .about-container {
    max-width: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
  }

  /* --- UPDATED: Typing Intro Section --- */
  .typing-intro {
    padding: 1rem 0;
    margin-bottom: 2rem;
    text-align: center;
  }
  .typing-intro h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #222;
    margin: 0;
    display: flex; /* Use flexbox for alignment */
    justify-content: center;
    align-items: center;
  }
  .typing-container {
    color: #007bff;
    display: inline-block; /* Keeps the container tight to the text */
  }
  .typing-container .cursor {
    display: inline-block;
    background-color: #007bff;
    margin-left: 0.1rem;
    width: 3px;
    animation: blink 1s infinite;
  }
  .typing-container .cursor.typing {
    animation: none; /* Stop blinking while typing */
  }

  /* --- Hero Section --- */
  .hero-section {
    text-align: center;
    padding: 4rem 1rem;
    background-color: #f9f9f9;
    border-radius: 16px;
    margin-bottom: 3rem;
    animation: fadeInDown 0.8s ease-out;
  }
  .hero-section h1 {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #222;
  }
  .hero-section .subtitle {
    font-size: 1.3rem;
    color: #555;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* --- Key Highlights Section (Icon Cards) --- */
  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
  .highlight-card {
    background-color: #fff;
    border: 1px solid #e9e9e9;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeInUp 0.7s ease-out both;
  }
  .highlight-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.09);
  }
  .highlight-card .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: -webkit-linear-gradient(45deg, #007bff, #8a2be2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .highlight-card h3 {
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #333;
  }
  .highlight-card p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
  
  .highlight-card:nth-child(1) { animation-delay: 0.1s; }
  .highlight-card:nth-child(2) { animation-delay: 0.2s; }
  .highlight-card:nth-child(3) { animation-delay: 0.3s; }
  .highlight-card:nth-child(4) { animation-delay: 0.4s; }


  /* --- Section Titles --- */
  .section-title {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 600;
    margin-top: 4rem;
    margin-bottom: 2.5rem;
    color: #333;
  }

  /* --- Education & Credentials Section --- */
  .credentials-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
  .credential-item {
    background: #f9f9f9;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .credential-item .icon {
    font-size: 2.5rem;
    color: #007bff;
  }
  .credential-item-info h4 {
    margin: 0 0 0.25rem 0;
    font-size: 1.2rem;
    color: #333;
  }
  .credential-item-info p {
    margin: 0;
    font-size: 1rem;
    color: #666;
  }

  /* --- Video Section --- */
  .video-section {
    margin: 4rem auto;
    max-width: 800px;
  }
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* --- Keyframe Animations --- */
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes blink {
    50% { background-color: transparent; }
  }
</style>

<div class="about-container">

  <!-- ======================================================================= -->
  <!-- TYPING INTRO -->
  <!-- ======================================================================= -->
  <div class="typing-intro">
    <h1>I am&nbsp;<div class="typing-container"><span id="identity-text"></span><span class="cursor"></span></div></h1>
  </div>

  <!-- HERO SECTION -->
  <div class="hero-section">
    <h1>Welcome!</h1>
    <p class="subtitle">
      I'm a <strong>Fulbright Scholar</strong> and Senior Lecturer at <strong>East West University</strong>, specializing in the application of machine learning and data analytics to the fields of accounting and finance.
    </p>
  </div>

  <!-- KEY HIGHLIGHTS -->
  <div class="highlights-grid">
    <div class="highlight-card">
      <i class="fas fa-robot icon"></i>
      <h3>Machine Learning Focus</h3>
      <p>Applying modern AI tools to analyze unstructured data and understand its impact on corporate transparency and capital markets.</p>
    </div>
    <div class="highlight-card">
      <i class="fas fa-chalkboard-teacher icon"></i>
      <h3>Academic & Educator</h3>
      <p>Teaching Machine Learning for Finance and Data Analytics for Finance in the MSc in Data Science and Analytics program.</p>
    </div>
    <div class="highlight-card">
      <i class="fas fa-chart-bar icon"></i>
      <h3>Data Storyteller</h3>
      <p>Transforming complex data into compelling narratives and actionable insights for strategic decision-making.</p>
    </div>
    <div class="highlight-card">
      <i class="fab fa-google icon"></i>
      <h3>Scholarly Impact</h3>
      <p>H-Index: 7, Citations: 260+. A testament to my research contributions. <a href="https://scholar.google.com/citations?user=3-AfcGcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">View Profile</a>.</p>
    </div>
  </div>

  <!-- EDUCATION & CREDENTIALS -->
  <h2 class="section-title">Education & Credentials</h2>
  <div class="credentials-section">
    <div class="credential-item">
      <i class="fas fa-graduation-cap icon"></i>
      <div class="credential-item-info">
        <h4>MSc in Accounting and Analytics</h4>
        <p><a href="https://www.rit.edu" target="_blank" rel="noopener noreferrer">Rochester Institute of Technology</a></p>
      </div>
    </div>
    <div class="credential-item">
      <i class="fas fa-graduation-cap icon"></i>
      <div class="credential-item-info">
        <h4>MBA & BBA in Accounting</h4>
        <p><a href="https://www.du.ac.bd" target="_blank" rel="noopener noreferrer">University of Dhaka</a></p>
      </div>
    </div>
    <div class="credential-item">
      <i class="fab fa-google icon"></i>
      <div class="credential-item-info">
        <h4>Certified Data Analyst</h4>
        <p><a href="https://www.coursera.org/account/accomplishments/professional-cert/AP6JRF9L57KY" target="_blank" rel="noopener noreferrer">Google Professional Certificate</a></p>
      </div>
    </div>
    <div class="credential-item">
      <i class="fas fa-award icon"></i>
      <div class="credential-item-info">
        <h4>Beta Gamma Sigma</h4>
        <p>Inducted 2024, for academic excellence in the MSc program at RIT.</p>
      </div>
    </div>
  </div>

  <!-- VIDEO INTRODUCTION -->
  <div class="video-section">
    <h2 class="section-title">A Glimpse into My Work</h2>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/FQ9sWxqNT_A?si=CB1eFFTt0DrxmgjL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>

</div>

<!-- JavaScript for the animated text -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const textSpan = document.getElementById("identity-text");
    const cursorSpan = document.querySelector(".typing-container .cursor");
    const identities = ["a Fulbrighter.", "an Academic.", "a Researcher.", "a Data Scientist."];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      cursorSpan.classList.add('typing');
      if (charIndex < identities[textArrayIndex].length) {
        textSpan.textContent += identities[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      cursorSpan.classList.add('typing');
      if (charIndex > 0) {
        textSpan.textContent = identities[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= identities.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    if (identities.length) setTimeout(type, newTextDelay + 250);
  });
</script>