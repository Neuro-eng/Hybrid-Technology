# Fast Setup Steps (Free, No Upfront Investment)

## ⚠️ If you already uploaded the previous version
This version fixes the 404 error and removes GitHub branding from the page. In your existing repo:
1. Delete the old files (or just overwrite them) — upload ALL files from this new extracted folder, including the new `_layouts/` and `assets/` folders, replacing what's there.
2. GitHub Pages will auto-rebuild in ~1 minute after you commit.
3. Confirm the fix by visiting your homepage and clicking "Start the Practice Exams" — it should now load instead of showing a 404.


## 1. Push to GitHub (2 min)
1. Create new repo on GitHub, e.g. `AWS-Cloud-Practitioner-Notes`.
2. Extract the tar.gz and drag-drop all files into the repo via GitHub web UI
   (or use git):
   ```
   git init
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git add .
   git commit -m "Initial practice exams"
   git branch -M main
   git push -u origin main
   ```

## 2. Enable GitHub Pages (1 min)
1. Repo → **Settings → Pages**
2. Source = **Deploy from a branch** → Branch = `main`, folder = `/ (root)` → **Save**
3. Live at `https://YOUR-USERNAME.github.io/YOUR-REPO/` in ~1 minute.

## 3. Make the sellable PDF (free tools only)
```
pandoc practice-exam/*.md -o AWS-Practice-Exams.pdf
```
- Cover image: Canva free tier (no paid plan needed).
- Also export a short sample PDF (3–5 questions) as a free lead magnet.

## 4. Set up selling — no bank details ever shown publicly
Use **Gumroad**, **Payhip**, or **Ko-fi** (all free to join, no listing fee):
1. Sign up → **New Product** → upload your PDF → set price to **$12 fixed**, or "pay what you want" with a **$12 minimum** (Gumroad supports minimum-price-with-tips mode).
2. Go to **Settings → Payouts** and add PayPal email (or bank) — this is private, only visible to you, never displayed on the public product page.
3. Buyers only ever see the price + "Add to cart" button — no bank/account info is exposed anywhere.
4. Payouts land in your PayPal/bank automatically on the platform's schedule (instant–weekly) — no manual transfer needed.

## 5. Link it back to your repo
In `practice-exam/exams.md`, replace the two placeholder lines with:
- Your sample PDF link
- Your Gumroad/Payhip product URL

## 6. Free promotion (this drives actual sales — nothing sells itself)
- Post the repo link on Reddit (r/AWSCertifications), LinkedIn, Dev.to.
- Add GitHub topics: `aws`, `cloud-practitioner`, `practice-exam` for search discoverability.
- Ask users to ⭐ star the repo — social proof compounds over time.

## 7. Keep content current (protects long-term income)
- Recheck AWS's official CLF-C02 exam guide every few months.
- Bump a version note in README.md each revision (e.g. `v2 — 2027`).
- Re-upload updated PDF to Gumroad — existing buyers get the new version automatically, no extra work.

---
**Reality check:** This is a legitimate, zero-cost side-income setup — not a guaranteed-income scheme. Actual earnings depend entirely on traffic, content quality, and how consistently you promote and update it.

---

# How to Keep This Repo Upgradeable (Adding More Content Later)

This structure is built so you can keep adding content indefinitely without breaking anything. Here's the repeatable pattern:

## Adding a new practice exam
1. Repo → `practice-exam` folder → **Add file → Create new file**
2. Name it `practice-exam-12.md` (next number in sequence)
3. Paste this required header, then your questions below it:
   ```
   ---
   layout: default
   title: Practice Exam 12
   ---

   # Practice Exam - 12

   **1. Your question?**
   A) Option 1
   B) Option 2
   C) Option 3
   D) Option 4

   **Answer: B**
   *Explanation:* Your explanation here.
   ```
4. Commit
5. Open `practice-exam/exams.md` → add a new table row linking to it:
   ```
   | [12](practice-exam-12.html) | Your Topic Name | Domain focus |
   ```
6. Commit

## Adding a whole new content type (e.g., a Blog, FAQ, or Cheat Sheet page)
1. Create a new folder at the repo root, e.g. `cheat-sheets/`
2. Add `.md` files inside it, each with the same `---layout: default / title: ... ---` header
3. Link to them from `index.md` or `practice-exam/exams.md` using relative paths, e.g. `cheat-sheets/iam-cheatsheet.html`

## Updating the free PDF
1. When you add new exams, regenerate the PDF (ask me to rebuild it any time by saying "update the PDF with the new content")
2. Replace the file at `assets/pdf/AWS-Cloud-Practitioner-Practice-Exams.pdf` with the new version (same filename keeps all existing links working)

## General rule for staying upgradeable
- Always keep the `---layout: default / title: ... ---` header at the top of every new `.md` page — this is what makes it render with your site's design instead of plain text
- Always link using `.html`, never `.md`
- Keep new files inside logical folders (`practice-exam/`, future folders like `cheat-sheets/`) rather than dumping everything at the root, so it stays organized as it grows
