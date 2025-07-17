---
title: "Teaching"
layout: single
permalink: /teaching/
author_profile: true
---

<style>
  /* --- Main container for the new layout --- */
  .teaching-container {
    max-width: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
  }

  /* --- Section Title --- */
  .section-title {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 600;
    margin-top: 3rem;
    margin-bottom: 2.5rem;
    color: #333;
  }

  /* --- Philosophy Section --- */
  .philosophy-section {
    max-width: 800px;
    margin: 1rem auto 4rem auto;
    padding: 2.5rem;
    background-color: #f9f9f9;
    border-radius: 16px;
    text-align: center;
    font-size: 1.15rem;
    line-height: 1.7;
    color: #444;
    animation: fadeInUp 0.8s ease-out;
  }
  .philosophy-section .icon {
    font-size: 3rem;
    color: #007bff;
    margin-bottom: 1rem;
  }

  /* --- Strengths Section --- */
  .strengths-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
  .strength-card {
    background-color: #fff;
    border: 1px solid #e9e9e9;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeInUp 0.7s ease-out both;
  }
  .strength-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.09);
  }
  .strength-card .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: -webkit-linear-gradient(45deg, #28a745, #17a2b8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .strength-card h3 {
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #333;
  }
  .strength-card p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
  .strength-card:nth-child(1) { animation-delay: 0.1s; }
  .strength-card:nth-child(2) { animation-delay: 0.2s; }
  .strength-card:nth-child(3) { animation-delay: 0.3s; }

  /* --- Course Cards Section --- */
  .course-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-bottom: 4rem;
  }
  .course-card-new {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    background-color: #fff;
    border: 1px solid #e9e9e9;
    border-radius: 12px;
    padding: 2.5rem;
    transition: box-shadow 0.3s ease;
    animation: fadeInUp 0.7s ease-out both;
  }
  .course-card-new:hover {
    box-shadow: 0 12px 24px rgba(0,0,0,0.07);
  }
  .course-card-new .icon-container {
    font-size: 3rem;
    color: #007bff;
    flex-shrink: 0;
  }
  .course-card-new .course-info h3 {
    margin-top: 0;
    font-size: 1.6rem;
  }
  .course-card-new .course-info p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  /* --- Undergraduate Courses --- */
  .undergrad-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  .undergrad-card {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 1.5rem;
    text-align: center;
    animation: fadeInUp 0.7s ease-out both;
  }
  .undergrad-card h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    color: #333;
  }
  .rating-badge {
    display: inline-block;
    background-color: #28a745;
    color: white;
    padding: 0.25rem 0.6rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }
  .rating-badge .icon {
    margin-right: 4px;
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
</style>

<div class="teaching-container">

  <!-- ======================================================================= -->
  <!-- TEACHING PHILOSOPHY -->
  <!-- ======================================================================= -->
  <div class="philosophy-section">
    <div class="icon"><i class="fas fa-lightbulb"></i></div>
    <h2 class="section-title" style="margin-top:0; margin-bottom: 1rem;">My Teaching Philosophy</h2>
    <p>My approach to teaching is rooted in the belief that the most effective learning happens at the intersection of theory and practice. I design my curriculum to empower students with the critical data literacy and machine learning skills necessary to ask new questions and solve the challenges of a data-rich world.</p>
  </div>

  <!-- ======================================================================= -->
  <!-- TEACHING STRENGTHS -->
  <!-- ======================================================================= -->
  <div class="strengths-grid">
    <div class="strength-card">
      <div class="icon"><i class="fas fa-cogs"></i></div>
      <h3>Theory Meets Practice</h3>
      <p>I demystify complex topics by grounding them in real-world data and hands-on analytical exercises.</p>
    </div>
    <div class="strength-card">
      <div class="icon"><i class="fas fa-database"></i></div>
      <h3>Data-Driven Pedagogy</h3>
      <p>Students learn the entire data science pipeline, from data wrangling to model interpretation, using industry-standard tools.</p>
    </div>
    <div class="strength-card">
      <div class="icon"><i class="fas fa-search"></i></div>
      <h3>Fostering Curiosity</h3>
      <p>My goal is to foster an environment of intellectual curiosity where students develop confidence as analytical, evidence-based thinkers.</p>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- GRADUATE COURSES -->
  <!-- ======================================================================= -->
  <h2 class="section-title">Graduate Courses</h2>
  <div class="course-grid">
    <div class="course-card-new" style="animation-delay: 0.1s;">
      <div class="icon-container"><i class="fas fa-robot"></i></div>
      <div class="course-info">
        <h3>DSA 5045: Machine Learning for Finance</h3>
        <p>This flagship course provides a comprehensive introduction to machine learning models and their application to financial data. Students use Python libraries like Scikit-learn and TensorFlow to solve real-world problems in credit scoring, fraud detection, and algorithmic trading.</p>
        <a href="/files/syllabi/DSA5045.pdf" class="btn btn--info" target="_blank" rel="noopener noreferrer">View Syllabus</a>
      </div>
    </div>
    <div class="course-card-new" style="animation-delay: 0.2s;">
      <div class="icon-container"><i class="fas fa-chart-line"></i></div>
      <div class="course-info">
        <h3>DSA 5047: Data Analytics for Finance</h3>
        <p>This course focuses on extracting actionable insights from financial and alternative datasets. Students work with SQL, Python (Pandas), and data visualization tools like Tableau to analyze capital market data, build financial models, and communicate their findings through a case-based approach.</p>
        <a href="/files/syllabi/DSA5047.pdf" class="btn btn--info" target="_blank" rel="noopener noreferrer">View Syllabus</a>
      </div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- UNDERGRADUATE COURSES -->
  <!-- ======================================================================= -->
  <h2 class="section-title">Select Undergraduate Courses Taught</h2>
  <div class="undergrad-grid">
    <div class="undergrad-card" style="animation-delay: 0.1s;">
      <h4>Introduction to Business</h4>
      <span class="rating-badge"><i class="fas fa-star icon"></i> 4.9 / 5.0</span>
    </div>
    <div class="undergrad-card" style="animation-delay: 0.2s;">
      <h4>Financial Accounting</h4>
      <span class="rating-badge"><i class="fas fa-star icon"></i> 4.8 / 5.0</span>
    </div>
    <div class="undergrad-card" style="animation-delay: 0.3s;">
      <h4>Accounting Information Systems</h4>
      <span class="rating-badge"><i class="fas fa-star icon"></i> 4.8 / 5.0</span>
    </div>
    <div class="undergrad-card" style="animation-delay: 0.4s;">
      <h4>Managerial Accounting</h4>
      <span class="rating-badge"><i class="fas fa-star icon"></i> 4.7 / 5.0</span>
    </div>
  </div>

</div>