## Google SEO

### Search Engine Optimization

### Codes are Mainly in JavaScript

[SEO Link](http://static.googleusercontent.com/media/www.google.com/en//webmasters/docs/search-engine-optimization-starter-guide.pdf)

[Google Support](https://support.google.com/webmasters/answer/79812?hl=en)

[Some Guidelines](https://support.google.com/webmasters/answer/35769?hl=en)

[Some Tutorial Thing](http://www.hobo-web.co.uk/seo-tutorial/)

Codes Are Written Below:

### General
* To optimize SEO, it isn't just about the meta tags or some of the tags we place
* The content in the page matters
* The content needs to be quality, efficient content
* Refine keyword search for best
* SEO isn't always accurate
* SEO doesn't really develop anything particiularly new (content-wise)
* SEO varies from place to place potentially (so Number 1 on East Coast may not be the Number 1 search on the West Coast)
* Not always guaranteed to work
* Never link to SEO
* Webpages should be user friendly, not search friendly
* Be wary of redirects
* Better Quality=Better Traffic
* Never Duplicate Content
* Redirects May=Spam
* Make Sure that Non WWW turns into WWW

### Facts
* 90% of the world searches are from Google
* This also means a lot of traffic
* Google gets 100 Billion+ searches a month
* More than 50% of searches come from mobile devices
* However, only 50% of the searches are considered to be secure
* Google accounts for almost 40% of internet traffic, sometimes it can go up to 65%

### Head Notes
* Title should be within the head tag

Code:

<head>
<title>
This Is The Part That Gets Searched (Search Query)

* Make Sure that there is an unique title
* A couple of words
* No "Untitled" or "Webpage 1" etc.

</title>
<meta name="description=" content="Basically, this is supposed to give a description">

</head>

### Anchor Notes
<a href="Web Link Here">Website Name</a>

### Tags
<h1>Name</h1>
<h2>Quick Info</h2>
<p>Explanation or Background Here</p>

* <h1> is the most important
* <h6> is the least important

### Meta Tags
* Meta Tags describe the page
* Not all meta tags help lead people to your website
* More About Keywords
* May Not Make Sense
* No Sentences

### Tricks to URLs

* Use Words in URLs
* Avoid Excessive Keywords
* Use 1 URL Easy to Type/Remember

### Tricks to the Website Itself
* Allow for partial URLs to bring you to your page
* Allow people to use html since Java/Flash may not always work
* Link to your root page

### Other Ways to Advertise
* Use other links to link to your own website
* Use a Variety of Keywords
* Use concise, but accurate description of the page
* Don't make it too wordy
* Descriptive in a couple of words
* Optimize Image Usage

### Naturally Links Webpages
* Have other webpages link to your webpage
* Have other websites advertise for you

### Content
* The content needs to be high quality if you want visitors to return
* The content needs to be useful
* Give the information needed

### Having the Website Searched with Mobile Devices
Set the Code As:

SetEnvIf User-Agent "Googlebot-Mobile" allow_ua
SetEnvIf User-Agent "Android" allow_ua
SetEnvIf User-Agent "BlackBerry" allow_ua
SetEnvIf User-Agent "iPhone" allow_ua
SetEnvIf User-Agent "NetFront" allow_ua
SetEnvIf User-Agent "Symbian OS" allow_ua
SetEnvIf User-Agent "Windows Phone" allow_ua
Order deny,allow
deny from all
allow from env=allow_ua



*Feel Free to Update This Page For Improvements*
