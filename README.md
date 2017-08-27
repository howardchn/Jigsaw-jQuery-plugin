# Jigsaw jQuery Plugin

This is a jQuery plugin that I made very long time ago. It is used to create a jigsaw game with mobile with your own images. See the screenshots below.

![Preview](https://github.com/howardchn/Jigsaw-jQuery-plugin/raw/master/preview.png)

It is very easy to use this plugin.

```javascript
var canvasWidth = 290;
var columnCount = 4;
var bricksCount = Math.pow(columnCount, 2);
var completeCallback = function() { console.log('Load completed.'); };
$.jigsaw('containerId', 'imagesUri', canvasWidth, columnCount, bricksCount, completeCallback);
```