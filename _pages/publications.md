---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<style>
  /* --- Keyword Highlights Section --- */
  .keyword-highlights {
    text-align: center;
    padding: 2rem 0;
    margin-bottom: 2rem;
    border-bottom: 1px solid #e9ecef;
  }
  .keyword-highlights h3 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #333;
  }
  .keywords-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .keyword-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.9rem;
    color: #555;
    font-weight: 500;
  }
  .keyword-item .icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #007bff;
  }

  /* --- Network Diagram Section --- */
  .network-section {
    margin-top: 4rem;
    text-align: center;
  }
  .network-section h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  #research-network-graph {
    width: 100%;
    height: 450px;
    background-color: #fdfdfd;
    border-radius: 12px;
    border: 1px solid #e9ecef;
    cursor: grab;
  }

  /* --- Google Scholar Link --- */
  .scholar-link-section {
    text-align: center;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #e9ecef;
  }
  .scholar-link-section a {
    text-decoration: none;
    font-weight: bold;
    color: #333;
    transition: color 0.2s ease;
  }
  .scholar-link-section a:hover {
    color: #007bff;
  }
  .scholar-link-section .icon {
    font-size: 1.5rem;
    margin-right: 8px;
    vertical-align: middle;
  }

</style>

<!-- ======================================================================= -->
<!-- KEYWORD HIGHLIGHTS -->
<!-- ======================================================================= -->
<div class="keyword-highlights">
  <h3>Core Research Themes</h3>
  <div class="keywords-container">
    <div class="keyword-item">
      <i class="fas fa-robot icon"></i>
      <span>AI & Unstructured Data</span>
    </div>
    <div class="keyword-item">
      <i class="fas fa-chart-line icon"></i>
      <span>Capital Markets</span>
    </div>
    <div class="keyword-item">
      <i class="fas fa-file-alt icon"></i>
      <span>Disclosure Quality</span>
    </div>
    <div class="keyword-item">
      <i class="fas fa-building icon"></i>
      <span>Corporate Governance</span>
    </div>
  </div>
</div>


<!-- ======================================================================= -->
<!-- ORIGINAL PUBLICATION LIST -->
<!-- ======================================================================= -->
{% assign publications_by_year = site.publications | group_by_exp: "post", "post.date | date: '%Y'" | reverse %}

{% for year in publications_by_year %}
  <h2 id="{{ year.name }}" class="archive__subtitle">{{ year.name }}</h2>
  {% for post in year.items %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}


<!-- ======================================================================= -->
<!-- INTERACTIVE KEYWORD NETWORK -->
<!-- ======================================================================= -->
<div class="network-section">
  <h2>Research Keyword Network</h2>
  <canvas id="research-network-graph"></canvas>
</div>


<!-- ======================================================================= -->
<!-- GOOGLE SCHOLAR LINK -->
<!-- ======================================================================= -->
<div class="scholar-link-section">
  <a href="https://scholar.google.com/citations?user=3-AfcGcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
    <i class="ai ai-google-scholar-square icon"></i>
    View Full Profile on Google Scholar
  </a>
</div>


<!-- D3.js Library and Network Graph Script -->
<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('research-network-graph');
    if (canvas) {
      const width = canvas.clientWidth;
      const height = 450;
      const context = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;

      const researchData = {
        nodes: [
          { id: "Corporate Finance", group: 1, radius: 25 },
          { id: "Disclosure Quality", group: 2, radius: 18 },
          { id: "Capital Markets", group: 1, radius: 22 },
          { id: "AI & NLP", group: 3, radius: 25 },
          { id: "Integrated Reporting", group: 2, radius: 15 },
          { id: "Governance", group: 1, radius: 18 },
          { id: "Unstructured Data", group: 3, radius: 18 },
          { id: "Firm Performance", group: 4, radius: 15 },
        ],
        links: [
          { source: "Corporate Finance", target: "Capital Markets" },
          { source: "Corporate Finance", target: "Governance" },
          { source: "Disclosure Quality", target: "Integrated Reporting" },
          { source: "Disclosure Quality", target: "Capital Markets" },
          { source: "AI & NLP", target: "Unstructured Data" },
          { source: "AI & NLP", target: "Disclosure Quality" },
          { source: "Unstructured Data", target: "Integrated Reporting" },
          { source: "Governance", target: "Firm Performance" },
          { source: "Disclosure Quality", target: "Firm Performance" },
        ]
      };

      const simulation = d3.forceSimulation(researchData.nodes)
        .force("link", d3.forceLink(researchData.links).id(d => d.id).distance(120))
        .force("charge", d3.forceManyBody().strength(-250))
        .force("center", d3.forceCenter(width / 2, height / 2));

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      simulation.on("tick", () => {
        context.clearRect(0, 0, width, height);

        context.beginPath();
        researchData.links.forEach(d => {
          context.moveTo(d.source.x, d.source.y);
          context.lineTo(d.target.x, d.target.y);
        });
        context.strokeStyle = "#ccc";
        context.stroke();

        researchData.nodes.forEach(d => {
          context.beginPath();
          context.moveTo(d.x + d.radius, d.y);
          context.arc(d.x, d.y, d.radius, 0, 2 * Math.PI);
          context.fillStyle = color(d.group);
          context.fill();
          context.strokeStyle = "#fff";
          context.lineWidth = 2;
          context.stroke();
        });
        
        context.font = "11px sans-serif";
        context.fillStyle = "black";
        context.textAlign = "center";
        context.textBaseline = "middle";
        researchData.nodes.forEach(d => {
          context.fillText(d.id, d.x, d.y);
        });
      });

      d3.select(canvas)
        .call(d3.drag()
          .container(canvas)
          .subject(event => simulation.find(event.x, event.y))
          .on("start", (event) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
          })
          .on("drag", (event) => {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
          })
          .on("end", (event) => {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
          }));
    }
  });
</script>