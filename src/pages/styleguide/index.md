---
title: Styleguide
date: "2018-04-05"
style:
---

<div class="grid debug">
  <div class="col1to12">
    <h2 class="line">12 Column Grid</h2>
  </div>
  <div class="centerColumn">
    <h3 class="line">Center Column</h2>
  </div>

  <div class="grid">
    <div class="col1to6">
      <h3 class="line">6 columns of 12</h2>
    </div>
    <div class="col7to12">
      <h3 class="line">6 columns of 12</h2>
    </div>
  </div>

  <div class="grid">
    <div class="col1to4">
      <h3 class="line">4 columns of 12</h2>
    </div>
    <div class="col5to8">
      <h3 class="line">4 columns of 12</h2>
    </div>
    <div class="col9to12">
      <h3 class="line">4 columns of 12</h2>
    </div>
  </div>

  <div class="grid">
    <div class="col1to3">
      <h3 class="line">3 columns of 12</h2>
    </div>
    <div class="col4to6">
      <h3 class="line">3 columns of 12</h2>
    </div>
    <div class="col7to9">
      <h3 class="line">3 columns of 12</h2>
    </div>
    <div class="col10to12">
      <h3 class="line">3 columns of 12</h2>
    </div>
  </div>


</div>





<h2 class="line">Default Text</h2>

Lorem ipsum dolor sit amet, discere scriptorem mediocritatem ad duo, pri nusquam moderatius vituperata ut, reque detraxit sententiae eam et. Vix te audire torquatos, mel et etiam debet soleat. Erant gloriatur ea mel. Sea modo fierent conceptam ex, modus homero timeam ut vim. An eum putant periculis referrentur, pro et ubique inermis nostrum. Nec modus maiorum ne.

<p class="uppercase">p Heading uppercase</p>

or text with <span class="uppercase">uppercase</span> in the text.

This Text **is bold** plus has a [external link](http://signalwerk.ch) and an internal [link](../).

1. First ordered list item
2. Another item
    * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
    1. Ordered sub-list
4. And another item.


### List

* normal
* list
* unordered


<br>
<br>
<br>

<h2 class="line">Table</h2>


<table>
  <tr>
    <th class="w30p">30% Width</th>
    <th class="w50p">50% Width</th>
    <th class="num">right align</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td class="num">5</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td class="num">94</td>
  </tr>
</table>

available widths: `5% ... 100%` in `5%` steps `33.3%`, `66.6%`

<br>
<br>
<br>



<h2 class="line">Titles</h2>

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading


<h1 class="uppercase">H1 Heading uppercase</h1>
<h2 class="uppercase">H2 Heading uppercase</h2>
<h3 class="uppercase">H3 Heading uppercase</h3>
<h4 class="uppercase">H4 Heading uppercase</h4>
<h5 class="uppercase">H5 Heading uppercase</h5>


<h1 class="line">H1 Heading with Line</h1>
<h2 class="line">H2 Heading with Line</h2>
<h3 class="line">H3 Heading with Line</h3>
<h4 class="line">H4 Heading with Line</h4>
<h5 class="line">H5 Heading with Line</h5>

<br>
<br>
<br>



<hr class="thick">

<h2 class="line">Special</h2>

### HTML Inline
It's also possible to inline-style custom stuff.

<style>
h3 span.mask {
  font-size: 3rem;
  clip-path: polygon(0 0, 0 55%, 100% 80%, 100% 0);
}
</style>



<div class="centerColumn special">
  <h3>
    <span class="mask">Styled Text with Mask</span>
  </h3>
</div>



<hr class="thick">

<h2 class="line">Typography</h2>


### NARROW NO-BREAK SPACE
# 18. 8. 2018
# 18.&#8239;8.&#8239;2018



<hr class="thick">




This is the Ruler:

<hr>

and thick

<hr class="thick">


## Page Styles
there are some general page-styles.
add to frontmatter a style-line.

### No Title-Bar
```
style: index headings--line

```

### Underline on all headings
```
style: headings--line

```


## Full Width



<div class="fullwidth responsive h60 m-h40">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.3833538486647!2d8.492635815823236!3d47.3849526791706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900bcb7d715cc5%3A0x2cf9fe2bc7f69093!2sBadenerstrasse+585%2C+8048+Z%C3%BCrich!5e0!3m2!1sen!2sch!4v1524348094322" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
