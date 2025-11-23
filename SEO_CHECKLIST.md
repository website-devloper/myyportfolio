# Quick SEO Configuration Checklist

## 🚨 MUST UPDATE BEFORE DEPLOYMENT

### 1. Update Site Information
**File**: `app/components/metadata.ts`

Replace these placeholders:
```typescript
name: "Your Name - Portfolio"           → "John Doe - Portfolio"
title: "Your Name | Full Stack..."      → "John Doe | Full Stack..."
url: "https://yourportfolio.com"        → "https://johndoe.com"
ogImage: "https://yourportfolio.com..." → "https://johndoe.com/og-image.jpg"
author: "Your Name"                     → "John Doe"
twitter: "@yourusername"                → "@johndoe"
github: "https://github.com/..."        → "https://github.com/johndoe"
linkedin: "https://linkedin.com/..."    → "https://linkedin.com/in/johndoe"
```

### 2. Update Structured Data
**File**: `app/page.tsx` (lines 31-65)

Replace JSON-LD values:
- Line 38: `"name": "Your Name"`
- Line 39: `"url": "https://yourportfolio.com"`
- Lines 41-45: Social media URLs

### 3. Update Sitemap
**File**: `app/sitemap.ts`

```typescript
const baseUrl = 'https://johndoe.com'  // ← Change this
```

### 4. Update robots.txt
**File**: `public/robots.txt`

```
Sitemap: https://johndoe.com/sitemap.xml  # ← Change this
```

---

## 📸 Create Open Graph Image

1. Create image: 1200×630px
2. Include: Your name, title, professional design
3. Save as: `public/og-image.jpg`
4. Update path in `metadata.ts`

---

## ✅ After Deployment

1. **Submit Sitemap**: 
   - Google Search Console → Sitemaps → Add `https://yourdomain.com/sitemap.xml`

2. **Test SEO**:
   - [Rich Results Test](https://search.google.com/test/rich-results)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

3. **Performance Check**:
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)

---

## 🎯 SEO Score Targets

- PageSpeed Score: 90+
- Mobile Friendly: Yes
- HTTPS: Yes
- Structured Data: Valid
- Meta Description: 150-160 characters
- Title: 50-60 characters

---

**Need the full guide?** See `SEO_GUIDE.md`
