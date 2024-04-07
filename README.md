# Helen Curtis Music Portfolio

Simple static site built with [Astro](https://github.com/withastro/astro) and styled with Tailwind CSS.

Currently deployed with Netlify here:

https://helencurtismusic.netlify.app/

## How to update content

All content designed to be updated belongs in the following directories

```text
/
├── public/
│   └── images/
├── src/
│   ├── content/
│   │   └── blogs
│   │   └── pages
│   │   └── site
```

### Images

Images belong in `public/images` directory. Careful not to upload images that are too large, as it will affect web performance and will eat into free bandwidth tier.

As a rule of thumb, scale images down so they are less than 1000px at either dimension, and save them as `.webp` files ideally (though `.jpg` and `.png` will work, just they are larger in file size)

### Content

All content for the site is in `src/content` directory, and is written in [Markdown](https://www.markdownguide.org/basic-syntax/) files.

#### Site content

`src/content/pages` and `src/content/site` folders contain all the content for the relevant pages. You shouldn't rename/add/remove files here. If we want to do any changes here, it needs to be reflected in the actual `astro` pages.

#### Blogs

`src/content/blogs` contain all blog posts. They can be modified at any time. Here are the steps to adding a new blog:

- Create a new file in blogs directory. Filename must be in this format: `yymmdd-general-title-of-blog.md` (example: `230601-calluna-sun-recording.md`)
- File content must follow the following structure:

```text
---
title: Calluna Sun recording session, at Valley Wood Studios
date: 01 Jun 2023
image: "/images/blog/calluna-sun-recording.jpg"
---

We are so excited to have finally made it the studio, recording with Calluna Sun.

Continue to write any content, following the markdown specifications. Most common things are:

## Here's a heading

More text here

### Subheading bla bla

Lets make a nice looking list:

- item one
- item two

etc etc.
```

Once the blog post is saved following the above steps, it will automatically be added to the blog list and most recent blogs etc.

## How to deploy the changes

(to be done)
