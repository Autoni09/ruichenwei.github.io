---
title: "Reading Tracker"
summary: "A minimal tool for tracking what I read, with highlights and notes exported from Kindle and other sources."
date: 2026-02-20
tags: ["Reading", "Knowledge Management", "CLI"]
role: "Builder"
stack: ["Node.js", "Markdown", "SQLite"]
status: "active"
featured: true
---

## Background

I read a lot — books, papers, long-form articles — but I had no system for retaining what I learned. Kindle highlights were locked in Amazon's ecosystem. Notes were scattered across different apps. There was no single place to search across everything I'd read.

## My Role

I built this tool end-to-end: parsing Kindle clippings, normalizing highlights from different sources, and building a simple CLI for search and review.

## Solution

Reading Tracker imports highlights from Kindle (via the My Clippings.txt file), Readwise API, and manual Markdown notes. Everything is stored in a local SQLite database, and a CLI interface lets you search, tag, and review your highlights.

Features:

- **Import from multiple sources**: Kindle, Readwise, manual Markdown
- **Full-text search**: Find any highlight or note instantly
- **Daily review**: A simple command shows random highlights from your library
- **Export to Markdown**: Generate reading notes for any book

## Reflection

The most valuable part of this project wasn't the code — it was developing the habit of reviewing highlights regularly. The daily review command became a small ritual that significantly improved my retention.

I also learned that local-first tools have a different feel than cloud services. There's something satisfying about owning your data in a format you can inspect and modify.
