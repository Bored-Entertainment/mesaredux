![Repo Size](https://img.shields.io/github/repo-size/Bored-Entertainment/mesaredux?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/Bored-Entertainment/mesaredux?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/Bored-Entertainment/mesaredux?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/Bored-Entertainment/mesaredux?style=for-the-badge)
![Website Uptime](https://img.shields.io/website?style=for-the-badge&up_message=online&url=https%3A%2F%2Fmesaredux.mesagrey.ca)
<br>
# MESλREDUX - WIP

#### The team behind blockbuster sites such as [The Mesa Complex](https://github.com/Bored-Entertainment/themesacomplex), [Swordslasher.com](https://swordslasher.com/), and [BoredHTML](https://bored.pisaucer.com/) proudly presents this project—a definitive and scalable redux of The Mesa Complex, representing the culmination of our last six years of work!

This site is project is scalable, and adding a new game is simple as following steps:

1. Find the game you wish to add, currently we only support HTML5 and Flash game.
2. Ideally, you should be able to download the game files or `.swf`, you *can* send us a link to the game, but there's no guarantee we can add it.
3. If you aim to add a HTML5 game, ensure that the main HTML file is named `index.html` instead of `game.html`, `app.html`, etc.
4. If you aim to add a Flash game, ensure that your `.swf` file is named `game.swf`.
5. Upload a zip of the game files or `.swf` to [VirusTotal](https://www.virustotal.com/gui/home/upload), and keep the output URL.
6. Fork the repo ([Bored-Entertainment/mesaredux](https://github.com/Bored-Entertainment/mesaredux))
7. In the `_games` directory, create a folder with the name of the game you wish to add, lowercase and without spaces; As an example: `_games/my GAME` -> `_games/mygame`.
8. In the new directory you've created, create a file named `index.md` that contains only the following:
```html
---
layout: alt (Don't touch this)
title: "Electricman 2" (Add your games title)
flash: true (Whether or not your game is a flash game
aspectRatio: "16:9" (The ideal Aspect Ratio of your game, if unsure pick from 16:9 or 4:3)
description: "Battle stickman enemies with martial arts and super moves."(A brief, one sentence descriptor for your game)
---
(ENSURE YOU REMOVE CONTENT IN BRACKETS WHEN DONE)
```
9. In the new directory you've created, put the game files / `.swf` into the folder `index/src` & put the game zip if applicable into `index`. Your game should look like: `_games/mygame/index/src/index.html` or `/game.swf`.
10. OPTIONALLY Create a thumbnail for the game, sized `1280x720px` located in your games `index` directory. Thumbnails must include the games title and ideally would depict gameplay or be official title art. Adding a thumbnail saves us valuable time, and allows us to prioritize the adding of game requests that include thumbnails.
11. Create a Pull Request, following the guidelines and requested information present in the template.
<br><sub>Please note that the addition of games is at the discretion of the Bored Entertainment Team, and we will not add games if the `sha256` checksum provided by VirusTotal doesn't match up with what you've uploaded, VirusTotal flags the game you're requesting to add, we don't think it'll fit the aesthetic of the site, or for any reason not listed here.</sub>

### Thank You for contributing to the MESλREDUX project! 
