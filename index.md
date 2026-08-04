---
layout: default
title: Home
---

<section class="hero">
  <h2>Pass the AWS Cloud Practitioner Exam — First Try</h2>
  <p>111 original practice questions, organized by exam domain, plus a full-length timed mock exam. Free to study online, or grab the offline PDF bundle.</p>
  <div class="hero-buttons">
    <a class="btn btn-primary" href="practice-exam/diagnostic-quiz.html">Take the Free Diagnostic Quiz</a>
    <a class="btn btn-secondary" href="practice-exam/exams.html">Browse All Practice Exams</a>
  </div>
</section>

<section class="ticker-wrap">
  <div class="ticker-label">📡 Live AWS Updates</div>
  <div class="ticker-track">
    <div class="ticker-track-inner" id="aws-ticker">Loading latest AWS announcements…</div>
  </div>
</section>

<section class="features">
  <div class="feature-card">
    <h3>🎯 Domain-Focused</h3>
    <p>10 exams mapped to the real CLF-C02 domain weights — Cloud Concepts, Security, Technology, and Billing — so you study what's actually tested.</p>
  </div>
  <div class="feature-card">
    <h3>🧠 Diagnostic Quiz</h3>
    <p>A 10-question quick check tells you exactly which topics to prioritize before you dive in.</p>
  </div>
  <div class="feature-card">
    <h3>⏱️ Full-Length Mock</h3>
    <p>A 65-question timed exam that mirrors the real test's length and domain balance.</p>
  </div>
</section>

<section class="pricing">
  <div class="pricing-card">
    <span class="badge">100% Free</span>
    <h3>AWS Cloud Practitioner — Complete PDF</h3>
    <p class="price">Free<span>no signup, no payment</span></p>
    <ul class="pricing-list">
      <li>✅ All 111 practice questions + explanations (offline PDF)</li>
      <li>✅ Full-length 65-question mock exam</li>
      <li>✅ Free lifetime updates as AWS revises the exam</li>
      <li>✅ Printable format for offline study</li>
    </ul>
    <a class="btn btn-buy" href="assets/pdf/AWS-Cloud-Practitioner-Practice-Exams.pdf" download>Download the Free PDF</a>
    <p class="fine-print">No account or payment required — direct download.</p>
  </div>
</section>

<section class="cta-secondary">
  <p>Prefer to study for free first? <a href="practice-exam/exams.html">Start with the practice exams →</a></p>
</section>

<section class="about-box">
  <h3>About This Resource</h3>
  <p>Created by Neuro-eng, an independent learner who built these questions while studying for the CLF-C02 exam. All content is original, written from scratch, and free for anyone to use.</p>
  <p class="disclaimer">This is an independent study resource and is not affiliated with, endorsed by, or sponsored by Amazon Web Services (AWS) or Amazon.com, Inc. "AWS" and "Amazon Web Services" are trademarks of Amazon.com, Inc. or its affiliates.</p>
</section>

<script>
(function () {
  var feedUrl = "https://aws.amazon.com/about-aws/whats-new/recent/feed/";
  var inner = document.getElementById("aws-ticker");
  var track = inner ? inner.parentElement : null;

  var staticFallback = [
    { title: "AWS Transform continuous modernization now generally available", link: "https://aws.amazon.com/about-aws/whats-new/2026/7/aws-transform-continuous-general-available" },
    { title: "GPT-5.6 Sol, Terra, and Luna now support 1M token context on Bedrock", link: "https://aws.amazon.com/about-aws/whats-new/2026/08/gpt-sol-terra-luna-long-context-bedrock" },
    { title: "Amazon Bedrock AgentCore adds Web Search for grounded agent responses", link: "https://aws.amazon.com/blogs/aws/category/artificial-intelligence/amazon-machine-learning/amazon-bedrock/" },
    { title: "Amazon EC2 G7 instances with NVIDIA RTX PRO 4500 Blackwell GPUs announced", link: "https://aws.amazon.com/blogs/aws/top-announcements-of-the-aws-summit-in-new-york-2026/" },
    { title: "AWS DevOps Agent adds release management capability (preview)", link: "https://aws.amazon.com/blogs/aws/category/events/" },
    { title: "See all AWS announcements →", link: "https://aws.amazon.com/about-aws/whats-new/" }
  ];

  function renderItems(items) {
    var html = items.map(function (item) {
      return '<a href="' + item.link + '" target="_blank" rel="noopener">' + item.title + '</a>';
    }).join('<span class="ticker-sep">•</span>');
    inner.innerHTML = html + '<span class="ticker-sep">•</span>' + html;
    startScroll();
  }

  function startScroll() {
    if (!track || !inner) return;
    var pos = 0;
    var speed = 0.6;
    function step() {
      pos += speed;
      if (pos >= inner.scrollWidth / 2) { pos = 0; }
      track.scrollLeft = pos;
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function tryRss2json() {
    var apiUrl = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(feedUrl) + "&count=20";
    return fetch(apiUrl).then(function (r) {
      if (!r.ok) throw new Error("rss2json failed");
      return r.json();
    }).then(function (data) {
      if (!data || !data.items || !data.items.length) throw new Error("empty");
      return data.items.slice(0, 12).map(function (i) { return { title: i.title, link: i.link }; });
    });
  }

  function tryAllOrigins() {
    var apiUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent(feedUrl);
    return fetch(apiUrl).then(function (r) {
      if (!r.ok) throw new Error("allorigins failed");
      return r.text();
    }).then(function (xmlText) {
      var doc = new DOMParser().parseFromString(xmlText, "text/xml");
      var entries = doc.querySelectorAll("item");
      if (!entries.length) throw new Error("no items");
      var items = [];
      entries.forEach(function (el, idx) {
        if (idx >= 12) return;
        var title = el.querySelector("title") ? el.querySelector("title").textContent : "AWS Update";
        var link = el.querySelector("link") ? el.querySelector("link").textContent : feedUrl;
        items.push({ title: title, link: link });
      });
      return items;
    });
  }

  tryRss2json()
    .catch(function () { return tryAllOrigins(); })
    .then(function (items) { renderItems(items); })
    .catch(function () { renderItems(staticFallback); });
})();
</script>
