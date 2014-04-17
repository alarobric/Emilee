# Emilee - A Theme for Ghost [![Build Status](https://travis-ci.org/alarobric/Emilee.png?branch=master)](https://travis-ci.org/alarobric/Emilee)

Based on the helpful starter theme Linen - created and maintained by *[Theme Spectre](http://themespectre.com/linen)*

Emilee is created and maintained by *[Alan Richards](http://alarobric.com)*

## Simple Installation

### Prerequisites

Just Ghost!
Version 0.4.2 is the currently targeted release, and I plan to keep with the bleeding edge as Ghost moves forward.

### Setup

Download and expand the zip release into your /content/themes folder in Ghost.

Restart your instance of Ghost, then login to the Ghost admin and change your theme to Emilee.

Enjoy your new theme, and let me know your thoughts!

### Usage

Due to the ongoing development of Ghost, some features are a little harder to obtain than others. To include picures on your summary pages (main page, tag pages, etc), you'll need to make sure the image you want featured is the first item in your post. It must be before any text at all.

Secondly, if you'd like the banner image replaced by a featured image on a post page, simply include an image with alt-text `main-image` like the example below.

` ![main-image](https://ghost.org/images/ghost.png)

As Ghost grows, these hacks are likely to become easier to use features, but for now this is an easier way around the issue of featured images.

## Development

If you'd like to modify things, extend the theme, or branch off somewhere different, you'll need a few more things.

### Prerequisites

1. Node.js (obviously)
2. Ruby
3. Sass
4. Grunt (best to run 'npm install -g grunt-cli')

### Setup

Clone (or fork) this repository into your /content/themes/ folder in Ghost.

Run `npm install` in the linen directory to install grunt modules and bower

Run `grunt` to pull the bower files, copy and build the Sass files
Run `grunt watch` when you are ready to start themeing. Grunt will monitor the handlebars templates and sass files, and rebuild when necessary. Livereload is supported.

Within the Ghost admin pages, change your theme to Emilee. Note: as of Ghost 0.4 you'll have to restart Node.js after installing the theme for Ghost to notice.

Have fun!

## Thanks To:

* Linen theme for Ghost
* Themble & Eddie Machado for the Bones framework
* HTML5 Boilerplate
* Mono Social Icon Font
* Font Awesome
* Ghost
