---
layout: layouts/base.njk
title: Home
description: A universal static site powered by Eleventy
---

# Welcome

This is a universal static site. It is built with Eleventy and deployed automatically via Cloudflare Pages.

## What's here

- Simple markdown pages
- Automatic rebuild on push
- Ready for n8n automation

## Latest posts

{% for post in collections.posts | reverse %}
- [{{ post.data.title }}]({{ post.url }}) — {{ post.data.date | formatDate }}
{% endfor %}
