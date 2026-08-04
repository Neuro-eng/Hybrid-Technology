---
layout: default
title: Diagnostic Quiz
---

# Diagnostic Quiz (Take This First)

10 quick questions covering all 4 exam domains. Select an answer to reveal instant feedback — your score tells you which topic-exams to prioritize.

<div id="quiz-diag"></div>

<script src="../assets/js/quiz.js"></script>
<script>
renderQuiz("quiz-diag", [
  {"q": "Under the Shared Responsibility Model, who is responsible for patching the guest OS on EC2?", "options": ["AWS", "The customer", "AWS Support", "A third party"], "answer": "B", "explain": "Customers are responsible for security 'in' the cloud, including guest OS patches."},
  {"q": "Which service distributes incoming traffic across multiple EC2 instances?", "options": ["Route 53", "Elastic Load Balancing", "Direct Connect", "CloudFront"], "answer": "B", "explain": "ELB automatically distributes incoming traffic across multiple targets to improve availability."},
  {"q": "Which storage class is cheapest for data accessed almost never, retrievable in hours?", "options": ["S3 Standard", "S3 Glacier Deep Archive", "S3 Standard-IA", "S3 Intelligent-Tiering"], "answer": "B", "explain": "S3 Glacier Deep Archive is the lowest-cost storage class for long-term, rarely accessed data."},
  {"q": "Which pricing model has no long-term commitment and is billed by the hour/second?", "options": ["Reserved Instances", "On-Demand Instances", "Dedicated Hosts", "Savings Plans"], "answer": "B", "explain": "On-Demand lets you pay by the hour or second with no long-term commitment."},
  {"q": "Which service is AWS's managed NoSQL database?", "options": ["RDS", "DynamoDB", "Redshift", "Aurora"], "answer": "B", "explain": "DynamoDB is AWS's fully managed NoSQL key-value and document database."},
  {"q": "Which service detects threats like unauthorized access across your AWS account?", "options": ["Macie", "GuardDuty", "Config", "Artifact"], "answer": "B", "explain": "GuardDuty continuously monitors for malicious activity and unauthorized behavior."},
  {"q": "Which support plan includes a Technical Account Manager (TAM)?", "options": ["Basic", "Developer", "Business", "Enterprise"], "answer": "D", "explain": "A TAM is included with the Enterprise support plan."},
  {"q": "Which migration strategy means moving an app to the cloud with no code changes?", "options": ["Refactor", "Rehost (lift-and-shift)", "Repurchase", "Retire"], "answer": "B", "explain": "Rehosting moves an application to the cloud without changing its architecture or code."},
  {"q": "Which service lets you set custom cost alert thresholds?", "options": ["Cost Explorer", "AWS Budgets", "Pricing Calculator", "Trusted Advisor"], "answer": "B", "explain": "AWS Budgets lets you set custom cost/usage thresholds and receive alerts."},
  {"q": "Which is a core benefit of cloud computing regarding capital expense?", "options": ["Eliminates all IT cost", "Trades capital expense for variable expense", "Guarantees lower spend", "Removes need for budgeting"], "answer": "B", "explain": "Cloud computing lets you trade upfront capital expense for variable expense that scales with usage."}
]);
</script>

### Scoring guide
- **9–10 correct:** You're close to exam-ready — focus on [Exam 10 (Mixed Final Review)](practice-exam-10.html) and the [Full-Length Mock Exam](practice-exam-11-full-mock.html).
- **6–8 correct:** Solid base — work through [Exams 1–9](exams.html) by topic, focusing on any domain where you missed a question above.
- **0–5 correct:** Start with the [AWS Cloud Practitioner exam guide](https://aws.amazon.com/certification/certified-cloud-practitioner/) and a foundational course first, then return to [Exams 1–9](exams.html).

[← Back to all Practice Exams](exams.html)
