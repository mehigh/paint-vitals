# Improve Paint Vitals - Steps

## Setup

### Turn on Device Emulation: Moto G4

Edit -> Add Moto G4 from the list of Emulated Devices.

### Enable Network Throttling: Fast 3G

Throttle the network to Fast 3G.
Disable cache should be ticked.

### Enable Local Overrides

First time: Select folder for storing the overrides.

### Sources / Page: Save HTML page for overrides

Identify the current page in the tree structure, right click and select Save for Overrides.
Prepend the title element with the word Local to confirm it is working.

### Local Overridden baseline - Lighthouse Test

Run 3x Lighthouse / Performance mobile test (with overrides enabled), note the best results as a baseline, and acknowledge the variability.
FCP: 6.7s
LCP: 12.6s

## 1. Styles

For this optimization, concatenation, which is not as useful as it used to be, needs to be deactivated.

### Coverage: CSS

Order by "Usage Visualization" in ascending order.
A value of 100% for unused bytes confirms the file is entirely not used for the above-the-fold rendering.
The first ones are the most likely not to cause problems loaded asynchronously, but after each change, refresh the page and look for a degradation in the loading experience.

### Async CSS

For stylesheet link tags, replace:

`media="XXXX"`
by
`media="print" onload="this.media='all'"`

If there's no media attribute, add the new attributes in.

Solution:

* tribe-responsive-images-fe.min.css
* cookie-consent.css
* override.css
* theme-fragments.min.css
* microsoft-mosaic-grid.min.css
* swiper.min.css
* plyr.css
* microsoft-social-sharing.min.css

### Learnings

Loading async features.css degrades the loading experience.
Loading async ef-a24652.css creates a significant flash of unstyled content.style.Loading async style.css
Loading async mwf-west-european-default.min.css degrades the font loading experience, degrading the loading experience.  

### Preload

Using this template, copy the URLs of the render blocking assets and add preload links before the first script, or after the `<title>` tag if there is none earlier:

```html
<link rel="preload" href="path/to/file.css" as="style" priority="high">
```

### Styles optimized - Lighthouse test

FCP: 5.5s
LCP: 13.3s

### Styles Success

We have gotten down the list of render blocking CSS files to just 3.
FCP improved by ~1.2s.

Solution: <https://test.urldocs.com/performance/workshop/step1.html>

## 2. Web Fonts

For our example, the largest element on the screen is the image, but sometimes it's a text element.

We're going to hide the image for this experiment to discover the utility in webfont loading optimization.

Another way to tip the balance naturally towards the text can be a similar template with longer chunk of text, and that is why it's important to optimize for it, regardless if it's identified as being required to optimize LCP in the particular test scenario.

### WebFont unoptimized - Lighthouse test

FCP: 5.4s
LCP: 12.7s

Inspect the largest text element visible.
Access Computed styles.
Read the font-family value, and the font-weight.

Solution: "segoe ui", segoeui, "helvetica neue" / weight of 100.

### Network > Font

Filter by Fonts and check whether the font family of interest, from above, shows up in this list.
Most of the times the font files are named after the family, but that's not always the case.

If uncertain, test by blocking the web font file by right clicking and selecting "Block Request URL". Upon refresh, if you've identified it correctly, the element will change to display the fallback instead.

Copy the URL of the web font:
`https://test.urldocs.com/performance/workshop/assets/segoe-light-latest.woff2`

In this view, if you hover on the Waterfall you will notice at what time was the font discovered and queued for download (~4 seconds)

Solution: segoe-light-latest.woff2

### Preload primary web font

Template:
`<link rel="preload" href="FONTURL" as="font" type="font/woff2" crossorigin>`

You'll need to match the file extension with the type attribute.

The location where you add this font bears some importance.
Add this after the stylesheet preloads, in order to be queued after them.

### Dynamically named web Fonts

For web fonts on external origins where the file name can change, preconnect to the domains to increase the possibility of quickly fetching the file(s) once they're needed.

This preconnects to the domain hosting the CSS defining the fonts:
`<link rel="preconnect" href="https://fonts.googleapis.com">`

This creates a connection to the domain hosting the Web Font files, requiring the crossorigin attribute:
`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`

### WebFont Optimized - Lighthouse test

FCP: 5.4s
LCP: 6.1s

### WebFont Success

We have identified the web font file used on the largest text element on the page.
LCP improved by more than 6s.

Solution: <https://test.urldocs.com/performance/workshop/step2.html>

## 3. Scripts

For server-side rendered pages, the ideal is to not have any render blocking scripts.
Async scripts, while not blocking the initial rendering, it does interrupt the HTML parsing as soon as the JS file completes the download, and that is why deferring is preferred.
Limit async usage to mission-critical, small scripts - like simple analytics.

### Review Console Tab state

Take note of any pre-existing errors, ignore the warnings.
As we go through the optimization process, the goal is to not introduce any new errors.

As the workshop was prepared, the analytics was giving errors on the POST due to events not coming from an allowed domain, which is true. A snapshot of the page was taken on a playground domain in order to allow going through the optimization steps even after the original site changes, which otherwise could turn this exercise obsolete.

### Defer, stage 1

Start at the end of the HTML, working your way up for all script tags in the body, by introducing the `defer` attribute, and removing the `async` attribute, if present (`defer` is ignored when `async` is specified).

Refresh, verify there's no console errors. If there are errors, walk back the changes until you identify which script file has some inline code that's dependant on an external script.
To defer such a script, JavaScript knowledge will be required, and two common strategies are:

* Copy the inline script into a JS file that will be loaded with defer
* Wrap the inline script in a load event listener. This will ensure the dependency is loaded before running.

### Defer, stage 2

The script tags in the head wil require going through in a one-by-one approach, starting at the end of the `</head>` tag because there's an increased likelyhood of one of the files being a dependency.

Commonly you can find inline scripts depending on jquery.js, and that's when the combo of files jquery & jquery-migrate would need to be setup as render-blocking, without a defer attribute. Deferring them requires JavaScript knowledge and rewriting the inline scripts in Vanilla JS if they're critical to the usability of the site, or get them wrapped in a load event listener if they're not important.

### Scripts Optimized - Lighthouse test

FCP: 2.9s
LCP: 12.5s

Solution: <https://test.urldocs.com/performance/workshop/step3.html>

## 4. Media

Inspect the largest contentful paint element identified, which looks like an image.

### Media Preload

This being a background-image set on an element, we use the url from it for preloading the media file.

```html
<link rel="preload" as="image" href="path/to/image.jpg">
```

Check the network panel and confirm the download for the image is scheduled earlier.
Since the same image is used for both mobile and large screens, the size of the image does negatively impact the LCP.

The location of the preload matters, and adding it before the styles could sometimes negatively impact the First Contentful Paint.
Since with just the image and without the CSS it can not be displayed, add the preload after the CSS preload rules, but before the web font one.

We can review the Network panel to quickly gauge what's the best LCP possible with the current image - see a 6s+ download time.
This download time is heavily influenced by many other requests competing for bandwidth, and since we can't eliminate the other resources without a loss of functionality, we're going to need to optimize it some more.

### Media Optimization

Notice that there's a responsive image next to the tag with the background image, which would naturally deliver different images according to the size of the device.

```html
<style>
div.f-hero-image { 
  display: none; 
}
img.f-hero-image-inline {
  visibility: visible;
  opacity: 1;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
```

At this moment, we notice a much smaller image gets downloaded, but that's in addition to the larger one we no longer need.
Remove the single image preload.

### Media Preload - Responsive edition

Add a new snippet, discarding the imagesizes if there's no sizes attribute present:

```html
<link rel="preload" as="image" href="path/to/image.jpg" imagesizes="..." imagesrcset="...">
```

Copy the values into href / imagesrcset from the image tag, discard the imagesizes attribute (there's no sizes attribute).

### Media: Eager loading hint

On the image tag, add a `fetchpriority="high"` attribute.
Discard `loading="lazy"` attribute, if present.

Solution: <https://test.urldocs.com/performance/workshop/step4.html>

Before/after video: <test.urldocs.com/performance/workshop/before-after.mp4>

## 5. Easter egg - Cookie Notice

Search for `msccBannerV2` and uncomment the div tag. This will enable the cookie notice.

This has a significant impact the LCP because of a late significant layout shift. Using a fixed overlay approach provides a slightly better user experience, especially for the web vitals.

Solution: <https://test.urldocs.com/performance/workshop/step5.html>
