# practice-tests

Public index for MRJ practice tests (GitHub Pages).

**Live site:** https://mrjkorea.github.io/practice-tests/

### One-time GitHub Pages setup (repo owner)

If the site returns 404, enable Pages once:

1. Open [Settings → Pages](https://github.com/mrjkorea/practice-tests/settings/pages) for this repo.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (same as other MRJ quiz repos).
3. Run the **Deploy GitHub Pages** workflow on `main` (or push any commit). The workflow uploads the repo root (`index.html`, `tests.json`, etc.).

To use **Deploy from a branch** instead: choose branch `main`, folder `/ (root)`, then you can disable the Actions workflow if you prefer.

## Add a test

Edit [`tests.json`](tests.json) and append an object:

```json
{
  "id": "unique-slug",
  "title": "시험 제목",
  "subtitle": "학기 · 학교 · 학년",
  "url": "https://mrjkorea.github.io/your-repo/",
  "subject": "영어",
  "grade": "중1"
}
```

`subject` and `grade` are optional (shown as badges). Push to `main` to publish.

