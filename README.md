# Improve Paint Vitals Workshop - Cheatsheet

## 1. Stylesheets

To load CSS asynchronously, convert stylesheet link tags like:

```html
<link rel="stylesheet" href="/path/to/fonts.css" media="all">
<link rel="stylesheet" href="/path/to/fonts.css">
```

To:

```html
<link rel="stylesheet" href="/path/to/fonts.css" media="print" onload="this.media='all'">
```

Preload CSS with:

```html
<link rel="preload" href="path/to/file.css" as="style" priority="high">
```

## 2. Web fonts

To preload a static web font:

```html
<link rel="preload" href="https://example.com/fontfile.woff2" as="font" type="font/woff2" crossorigin>
```

To prepare connection for a domain hosting critical CSS / JS / Images:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
```

To prepare connection for domain with font files:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

## 3. Scripts

To defer the loading of a script, convert a script tag with an src attribute by adding the `defer` attribute, going from:

```html
<script type='text/javascript' src='example/file.js' ...></script>
```

To:

```html
<script defer type='text/javascript' src='example/file.js' ...></script>
```

Defer attribute is ignored for inline scripts.
Async overwrites defer.

## 4. Media

Identify the largest image on the page, and use the following code snippet to preload a non-responsive image, place this after the stylesheets & fonts preload:

```html
<link rel="preload" as="image" href="path/to/image.jpg">
```

For a responsive image, use this code snippet, where the values for sizes and srcset are copied over:

```html
<link rel="preload" as="image" href="path/to/image.jpg" imagesizes="..." imagesrcset="...">
```

Attribute to add to hint the priority level on Largest Contentful Paint images, and decode the image off the main thread:

```html
<img src="x.jpg" fetchpriority="high" decoding="async" ...>
```
