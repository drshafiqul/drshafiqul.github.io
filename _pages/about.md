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

  /* --- Hero Section --- */
  .hero-section {
    text-align: center;
    padding: 4rem 1rem;
    background-color: #f9f9f9;
    border-radius: 16px;
    margin-top: -2em; /* PULLS THE BOX TO THE TOP */
    margin-bottom: 3rem;
    animation: fadeInDown 0.8s ease-out; /* ANIMATION */
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
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); /* Adjusted for 4 cards */
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
    animation: fadeInUp 0.7s ease-out both; /* ANIMATION */
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
  
  /* --- Staggered Animation for Cards --- */
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

  /* --- Detailed Bio Section --- */
  .bio-section {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.15rem;
    line-height: 1.7;
    color: #444;
    text-align: justify;
    margin-bottom: 4rem;
  }

  /* --- Education & Credentials Section --- */
  .credentials-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;
  }
  .credential-item {
    background: #f9f9f9;
    border-radius: 12px;
    padding: 1.5rem;
    flex: 1 1 300px;
    min-width: 280px;
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
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
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
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

<div class="about-container">

  <!-- ======================================================================= -->
  <!-- HERO SECTION -->
  <!-- ======================================================================= -->
  <div class="hero-section">
    <h1>Welcome!</h1>
    <p class="subtitle">
      I'm a <strong>Fulbright Scholar</strong> and Senior Lecturer at <strong>East West University</strong>, specializing in the application of machine learning and data analytics to the fields of accounting and finance.
    </p>
  </div>

  <!-- ======================================================================= -->
  <!-- KEY HIGHLIGHTS -->
  <!-- ======================================================================= -->
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
      <i class="fas fa-book-open icon"></i>
      <h3>Published Researcher</h3>
      <p>My work appears in peer-reviewed journals, exploring the intersection of technology and financial governance. <a href="/publications/">View publications</a>.</p>
    </div>
    <div class="highlight-card">
      <i class="fas fa-chart-bar icon"></i>
      <h3>Data Storyteller</h3>
      <p>Transforming complex data into compelling narratives and actionable insights for strategic decision-making.</p>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- DETAILED BIO -->
  <!-- ======================================================================= -->
  <h2 class="section-title">My Journey</h2>
  <div class="bio-section">
    <p>My work revolves around a central theme: how does the modern information environment, rich with unstructured data from social media and corporate websites, create new challenges and opportunities for financial transparency? I leverage machine learning to dissect this data, aiming to understand its influence on capital market efficiency and corporate behavior. This passion drives both my <a href="/research/">research</a> and my <a href="/teaching/">teaching</a>, where I guide students to become critical, data-driven thinkers.</p>
  </div>

  <!-- ======================================================================= -->
  <!-- EDUCATION & CREDENTIALS -->
  <!-- ======================================================================= -->
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
  </div>

  <!-- ======================================================================= -->
  <!-- VIDEO INTRODUCTION -->
  <!-- ======================================================================= -->
  <div class="video-section">
    <h2 class="section-title">A Glimpse into My Work</h2>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/FQ9sWxqNT_A?si=CB1eFFTt0DrxmgjL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>

</div>