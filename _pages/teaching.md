---
title: "My Teaching"
layout: single
permalink: /teaching/
author_profile: true
---

<style>
  /* --- Main container & General Styles --- */
  .teaching-container { max-width: 100%; font-family: 'Helvetica Neue', Arial, sans-serif; }
  .page__title { display: none; }
  .section-title { text-align: center; font-size: 2.2rem; font-weight: 600; margin-top: 4rem; margin-bottom: 3rem; color: #333; }

  /* --- Philosophy Section --- */
  .philosophy-section { max-width: 800px; margin: 1rem auto 4rem auto; padding: 2.5rem; background-color: #f9f9f9; border-radius: 16px; text-align: center; }
  .philosophy-section .icon { font-size: 2.5rem; color: #007bff; margin-bottom: 1rem; }
  .philosophy-section p { font-size: 1.1rem; line-height: 1.7; color: #444; }
  .philosophy-pillars { display: flex; justify-content: center; align-items: center; gap: 1rem; margin-top: 2rem; color: #555; font-weight: 600; font-size: 0.9rem; }
  .philosophy-pillars > div { display: flex; align-items: center; gap: 0.5rem; }
  .philosophy-pillars .icon { font-size: 1.2rem; margin-bottom: 0; }
  .philosophy-pillars .arrow { font-size: 1.5rem; color: #ccc; }
  
  /* --- CORE STRENGTHS - FLASHCARDS --- */
  .strengths-flashcards-container {
    max-width: 1100px;
    margin: 4rem auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .strength-flashcard {
    flex: 1;
    min-width: 280px;
    background: #fff;
    border: 1px solid #e9e9e9;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .strength-flashcard:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
  }
  .strength-flashcard .icon-wrapper {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem auto;
    font-size: 1.8rem;
    color: #fff;
  }
  .icon-wrapper.bg-1 { background-color: #007bff; }
  .icon-wrapper.bg-2 { background-color: #28a745; }
  .icon-wrapper.bg-3 { background-color: #6f42c1; }
  
  .strength-flashcard h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  .strength-flashcard p {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.6;
  }

  /* --- Graduate Courses --- */
  .grad-course-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2.5rem; margin: 0 auto 4rem auto; max-width: 950px; }
  .grad-course-card { background: #fff; border: 1px solid #e9e9e9; border-radius: 16px; display: flex; flex-direction: column; box-shadow: 0 5px 25px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; }
  .grad-course-card:hover { transform: translateY(-8px); box-shadow: 0 12px 35px rgba(0,0,0,0.1); }
  .course-content { padding: 1.5rem; }
  .course-content h3 { font-size: 1.4rem; margin-top: 0; margin-bottom: 0.75rem; color: #222; }
  .course-content p { font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem; color: #555; }
  .course-quote { border-top: 1px solid #f0f0f0; padding: 1.25rem; background-color: #fafafa; margin-top: auto; }
  .course-quote blockquote { font-size: 0.85rem; font-style: italic; color: #666; border-left: 3px solid #007bff; padding-left: 1rem; margin: 0 0 0.75rem 0; }
  .course-quote .author { font-size: 0.8rem; text-align: right; color: #888; }
  .tech-logos { display: flex; gap: 1rem; align-items: center; margin-top: 1rem; }
  .tech-logos img { height: 24px; opacity: 0.7; }
  
  /* --- Undergraduate Courses - NO BORDERS TABLE --- */
  .undergrad-table-wrapper { max-width: 800px; margin: 0 auto; }
  .undergrad-table { width: 100%; border-collapse: collapse; }
  .undergrad-table th, .undergrad-table td {
    padding: 1.25rem 1.5rem;
    text-align: left;
    border: none;
  }
  .undergrad-table tr {
     border-bottom: 1px solid #f3f3f3;
  }
  .undergrad-table tr:last-child {
    border-bottom: none;
  }
  .undergrad-table th { font-size: 0.9rem; color: #888; text-transform: uppercase; letter-spacing: 0.5px; }
  .undergrad-table .course-icon { font-size: 1.2rem; margin-right: 0.75rem; color: #007bff; vertical-align: middle; }
  .rating-bar-container { display: flex; align-items: center; gap: 1rem; }
  .rating-bar-wrapper { flex-grow: 1; height: 12px; background-color: #f0f0f0; border-radius: 6px; overflow: hidden; }
  .rating-bar { height: 100%; background: linear-gradient(90deg, #28a745, #86d9ab); border-radius: 6px; transform: scaleX(0); transform-origin: left; animation: growBar 1.5s ease-out forwards; }
  @keyframes growBar { to { transform: scaleX(1); } }
  .rating-text { font-size: 0.9rem; font-weight: 600; color: #555; min-width: 60px; }

</style>

<div class="teaching-container">

  <div class="philosophy-section">
    <div class="icon"><i class="fas fa-lightbulb"></i></div>
    <h2 class="section-title" style="margin-top:0; margin-bottom: 1rem;">My Teaching Philosophy</h2>
    <p>My philosophy is built on a simple premise: knowledge becomes transformative when applied. I architect learning experiences that bridge rigorous theory with hands-on, data-driven problem-solving to cultivate not just technical proficiency, but a mindset of persistent inquiry.</p>
    <div class="philosophy-pillars">
      <div><i class="fas fa-book icon"></i><span>Rigorous Theory</span></div>
      <div class="arrow">&rarr;</div>
      <div><i class="fas fa-cogs icon"></i><span>Practical Application</span></div>
      <div class="arrow">&rarr;</div>
      <div><i class="fas fa-chart-line icon"></i><span>Real-World Impact</span></div>
    </div>
  </div>

  <h2 class="section-title">Core Methodologies</h2>
  <div class="strengths-flashcards-container">
    <div class="strength-flashcard">
      <div class="icon-wrapper bg-1"><i class="fas fa-balance-scale"></i></div>
      <h3>Financial Frameworks</h3>
      <p>Building a deep, theoretical understanding of accounting principles and capital market structures.</p>
    </div>
    <div class="strength-flashcard">
      <div class="icon-wrapper bg-2"><i class="fas fa-laptop-code"></i></div>
      <h3>Empirical Analysis</h3>
      <p>Applying modern computational tools to test theories and extract insights from complex financial data.</p>
    </div>
    <div class="strength-flashcard">
      <div class="icon-wrapper bg-3"><i class="fas fa-lightbulb"></i></div>
      <h3>Strategic Insight</h3>
      <p>Cultivating the ability to translate data-driven findings into actionable, high-level business strategy.</p>
    </div>
  </div>

  <h2 class="section-title">Graduate Courses</h2>
  <div class="grad-course-grid">
    <div class="grad-course-card">
      <div class="course-content">
        <h3>DSA 5045: Machine Learning for Finance</h3>
        <p>A deep dive into applying predictive models to financial data. Students use an industry-standard toolkit to solve real-world problems in credit scoring, fraud detection, and algorithmic trading.</p>
        <a href="/files/syllabi/DSA5045.pdf" class="btn btn--info" target="_blank" rel="noopener noreferrer">View Syllabus</a>
      </div>
      <div class="course-quote">
        <blockquote>AI will seep into all areas of the economy and society; we will expect everything to be smart.</blockquote>
        <div class="author">&mdash; Sam Altman, CEO of OpenAI</div>
        <div class="tech-logos">
          <img src="/assets/images/logos/python.svg" alt="Python">
        </div>
      </div>
    </div>
    <div class="grad-course-card">
      <div class="course-content">
        <h3>DSA 5047: Data Analytics for Finance</h3>
        <p>This course focuses on extracting strategic insights from financial and alternative datasets. Students master data wrangling, modeling, and visualization to drive evidence-based decisions.</p>
        <a href="/files/syllabi/DSA5047.pdf" class="btn btn--info" target="_blank" rel="noopener noreferrer">View Syllabus</a>
      </div>
      <div class="course-quote">
        <blockquote>A data culture... empowers every individual to do great things because of the data at their fingertips.</blockquote>
        <div class="author">&mdash; Satya Nadella, CEO of Microsoft</div>
        <div class="tech-logos">
          <img src="/assets/images/logos/rstudio.svg" alt="RStudio">
        </div>
      </div>
    </div>
  </div>

  <h2 class="section-title">Select Undergraduate Courses Taught</h2>
  <div class="undergrad-table-wrapper">
    <table class="undergrad-table">
      <thead>
        <tr>
          <th>Course Title</th>
          <th>Student Evaluation Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="fas fa-briefcase course-icon"></i>Introduction to Business</td>
          <td>
            <div class="rating-bar-container">
              <span class="rating-text">4.9 / 5.0</span>
              <div class="rating-bar-wrapper"><div class="rating-bar" style="width: 98%;"></div></div>
            </div>
          </td>
        </tr>
        <tr>
          <td><i class="fas fa-calculator course-icon"></i>Financial Accounting</td>
          <td>
            <div class="rating-bar-container">
              <span class="rating-text">4.8 / 5.0</span>
              <div class="rating-bar-wrapper"><div class="rating-bar" style="width: 96%;"></div></div>
            </div>
          </td>
        </tr>
        <tr>
          <td><i class="fas fa-sitemap course-icon"></i>Accounting Information Systems</td>
          <td>
            <div class="rating-bar-container">
              <span class="rating-text">4.8 / 5.0</span>
              <div class="rating-bar-wrapper"><div class="rating-bar" style="width: 96%;"></div></div>
            </div>
          </td>
        </tr>
        <tr>
          <td><i class="fas fa-chart-pie course-icon"></i>Managerial Accounting</td>
          <td>
            <div class="rating-bar-container">
              <span class="rating-text">4.7 / 5.0</span>
              <div class="rating-bar-wrapper"><div class="rating-bar" style="width: 94%;"></div></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>