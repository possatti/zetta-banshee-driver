# Zetta Banshee Driver

## About the driver

This is a drive to control [Banshee][banshee] (an open-source media player) through a [Zetta][zettajs] server. Right now the driver only has some limited functionality. Commands available are: pause, play, next track, and previous track.

## Install

To use this driver on you Zetta project, install it with this command:

```bash
$ npm install possatti/zetta-banshee-driver --save
```

This will download the driver directly from Github. Maybe I put it on npm any day... maybe. ;)

## Usage

```javascript
var zetta = require('zetta');
var Banshee = require('zetta-banshee-driver');

zetta()
  .use(Banshee)
  .listen(1337)
```

## Hardware

I believe it will work in any linux distribution with Banshee installed. But I've only tested it on Linux Mint, which already comes with it pre-installed. 

[zettajs]: http://www.zettajs.org/
[banshee]: http://banshee.fm/
