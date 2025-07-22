---
title: "My Journey: A Timeline of Achievements"
permalink: /journey/
layout: single
author_profile: true
classes: wide # This is the line you add
---

<style>
  /* Main container for the journey grid */
  .journey-grid {
    display: grid;
    grid-gap: 1rem; /* Reduced gap for a tighter feel */
    /* Smaller minmax value creates smaller tiles */
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: minmax(100px, auto);
    margin-top: 2rem;
  }

  /* Base style for each card in the grid */
  .journey-card {
    background: #fff;
    border: 1px solid #e9e9e9;
    border-radius: 10px; /* Slightly smaller radius */
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.04);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .journey-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  }

  /* Image container to handle object-fit correctly */
  .journey-img-container {
    width: 100%;
    height: 200px; /* Reduced height for smaller tiles */
    background-color: #f9f9f9; /* Subtle background for letterboxing */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  /* THIS IS THE KEY CHANGE FOR IMAGES */
  .journey-card img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Scales image to fit, no cropping */
    display: block;
  }
  
  /* Content area within the card */
  .journey-content {
    padding: 1.25rem;
    flex-grow: 1;
  }

  /* Date styling */
  .journey-date {
    display: inline-block;
    background-color: #f0f0f0;
    color: #555;
    padding: 0.2rem 0.6rem;
    border-radius: 15px;
    font-size: 0.75em;
    font-weight: bold;
    margin-bottom: 0.75rem;
  }

  /* Title and description styling */
  .journey-content h3 {
    margin-top: 0;
    font-size: 1.2em; /* Reduced for smaller tiles */
  }
  .journey-content p {
    color: #666;
    font-size: 0.9em; /* Reduced for smaller tiles */
    line-height: 1.5;
    margin-bottom: 0;
  }

  /* Text-only card for variety */
  .text-card {
    background: linear-gradient(135deg, #f5f7fa, #e9f0f7);
  }
</style>

<div class="journey-grid">

  <div class="journey-card">
    <div class="journey-img-container">
      <img src="/assets/images/timeline/BGS1.jpg" alt="Fulbright event at RIT">
    </div>
    <div class="journey-content">
      <span class="journey-date">2023 – 2024</span>
      <h3>Fulbright Scholar at RIT</h3>
      <p>Achieved a 4.0 GPA in MSc in Accounting & Analytics at Rochester Institute of Technology. Inducted into Beta Gamma Sigma.</p>
    </div>
  </div>

  <div class="journey-card">
    <div class="journey-img-container">
        <img src="/assets/images/timeline/BGS2.jpg" alt="Teaching at East West University">
    </div>
    <div class="journey-content">
      <span class="journey-date">2019 – Present</span>
      <h3>Senior Lecturer</h3>
      <p>Teaching Finance and Data Analytics at East West University. Developed new curriculum for 'Machine Learning for Accounting'.</p>
    </div>
  </div>

  <div class="journey-card">
    <div class="journey-img-container">
      <img src="/assets/images/timeline/MBA1.png" alt="MBA Award Ceremony">
    </div>
    <div class="journey-content">
      <span class="journey-date">2019</span>
      <h3>MBA Gold Medalist</h3>
      <p>Graduated as Valedictorian from the University of Dhaka with a 4.0 CGPA, earning the Al-Maruf Khan Gold Medal.</p>
    </div>
  </div>
  
  <div class="journey-card text-card">
    <div class="journey-content">
      <span class="journey-date">2023</span>
      <h3>Author & Researcher</h3>
      <p>Authored a book chapter in 'Integrated Reporting for Sustainability' published by <strong>Springer</strong>, a leading global academic publisher.</p>
    </div>
  </div>
  
  <div class="journey-card">
    <div class="journey-img-container">
      <img src="/assets/images/timeline/BBA1.jpg" alt="BBA Award Ceremony">
    </div>
    <div class="journey-content">
      <span class="journey-date">2018</span>
      <h3>BBA Gold Medalist</h3>
      <p>Awarded the Kabi Jasimuddin Hall Trust Fund Gold Medal for outstanding achievement at the University of Dhaka.</p>
    </div>
  </div>

  <div class="journey-card text-card">
    <div class="journey-content">
      <span class="journey-date">2021</span>
      <h3>Certified Data Analyst</h3>
      <p>Earned the <strong>Google Data Analytics Professional Certificate</strong>, verifying my skills in data cleaning, analysis, and visualization.</p>
    </div>
  </div>

  <div class="journey-card text-card">
    <div class="journey-content">
      <span class="journey-date">2018</span>
      <h3>Public Speaking Champion</h3>
      <p>Achieved 1st Runner Up in both the Global Tourism Week and Inter-University Public Speaking Championships.</p>
    </div>
  </div>

  <div class="journey-card text-card">
    <div class="journey-content">
      <span class="journey-date">2018</span>
      <h3>Finance Olympiad Medalist</h3>
      <p>Secured the Silver Medal as the 1st Runner Up in the nationwide IDLC Finance Olympiad, a premier competition in Bangladesh.</p>
    </div>
  </div>

</div>