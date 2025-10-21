![Repo Size](https://img.shields.io/github/repo-size/Bored-Entertainment/mesaredux?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/Bored-Entertainment/mesaredux?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/Bored-Entertainment/mesaredux?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/Bored-Entertainment/mesaredux?style=for-the-badge)
![Website Uptime](https://img.shields.io/website?style=for-the-badge&up_message=online&url=https%3A%2F%2Fmesaredux.mesagrey.ca)
<a href="https://discord.gg/DZJ4AmzKWC">![Discord](https://img.shields.io/discord/417916767487393792?style=for-the-badge&logo=discord&label=Discord&color=%235865F2&link=https%3A%2F%2Fdiscord.gg%2FDZJ4AmzKWC)</a>
<br>

# MESλREDUX

#### The team behind blockbuster sites such as [The Mesa Complex](https://github.com/Bored-Entertainment/themesacomplex), [Swordslasher.com](https://swordslasher.com/), and [BoredHTML](https://bored.pisaucer.com/) proudly presents this project—a definitive and scalable redux of The Mesa Complex, representing the culmination of our last six years of work!

<details>
  <summary>Adding a Game</summary>

#### This project is scalable, and adding a new game is simple as the following steps:

1. Find the game you wish to add; currently we support HTML5, DOS, and Flash game types.
2. Ideally, you should be able to download the game files or `.swf`, you *can* send us a link to the game, but there's no guarantee we can add it. If you wish to add a game, but do not have the relevent files, please open an **Issue**, not a Pull Request.
3. If you aim to add a HTML5 game, ensure that the main HTML file is named `index.html` instead of `game.html`, `app.html`, etc.
4. If you aim to add a Flash game, ensure that your `.swf` file is named `game.swf` and set the front-matter `type` to `flash`.
5. If you aim to add a game that needs to be emulated, ensure that your ROM file is zipped, is supported by [EmulatorJS](https://emulatorjs.org/docs4devs/cores/), and that the zip is named `game.zip` and set the front-matter `type` to `retroarch`.
6. Upload a zip of the game files (named game.zip) or `.swf` to [VirusTotal](https://www.virustotal.com/gui/home/upload), and keep the output URL.
7. Fork the repo ([Bored-Entertainment/mesaredux](https://github.com/Bored-Entertainment/mesaredux))
8. In the `_games` directory, create a folder with the name of the game you wish to add, lowercase and without spaces; As an example: `_games/my GAME` -> `_games/mygame`.
9. In the new directory you've created, create a file named `index.md` that contains only the following:
```html
---
layout: alt (Don't touch this)
title: "Electricman 2" (Add your games title.)
type: flash (Set to `html` for HTML5 builds, 'dos' for js-dos packages, `retroarch` for ROMs, or `flash` for SWF content.)
core: gb (This is the system that the game you are adding is based on, refer to the EmulatorJS Docs (https://emulatorjs.org/docs/systems) for which one to use. Only use if the layout is retroarch)
aspectRatio: "16:9" (The ideal Aspect Ratio of your game, if unsure pick from 16:9 or 4:3. [Default for retroarch should be 16:7.75])
description: "Battle stickman enemies with martial arts and super moves."(A brief, one sentence descriptor for your game.)
---
(ENSURE YOU REMOVE CONTENT IN BRACKETS WHEN DONE)
```
9. In the new directory you've created, put the game files / ROM / `.swf` into the folder `index/src` & put the game zip if applicable into `index`. Your game should look like: `_games/mygame/index/src/index.html`, `/game.zip` or `/game.swf`.
10. OPTIONALLY Create a thumbnail for the game, sized `1280x720px` located in your games `index` directory. Thumbnails must include the games title and ideally would depict gameplay or be official title art. Adding a thumbnail saves us valuable time, and allows us to prioritize the adding of game requests that include thumbnails.
11. Create a Pull Request, following the guidelines and requested information present in the template.
<br><sub>Please note that the addition of games is at the discretion of the Bored Entertainment Team, and we will not add games if the `sha256` checksum provided by VirusTotal doesn't match up with what you've uploaded, VirusTotal flags the game you're requesting to add, we don't think it'll fit the aesthetic of the site, or for any reason not listed here.</sub>
</details>
<details>
  <summary>Hosting a Mirror</summary>

#### MESλREDUX can be mirrored using three supported platforms. Before deploying, make sure you:

1. Fork the repository [Bored-Entertainment/mesaredux](https://github.com/Bored-Entertainment/mesaredux). (Include all branches)
2. Install [Pull](https://github.com/apps/pull) on your fork to keep your mirror up to date with the upstream repository.
3. Delete the `main` branch and make `build` the default. <b>IMPORTANT</b>

#### Optional: Custom Domain

If you want your mirror to be accessible via your own domain or subdomain:

1. Create a file named `CNAME` in the root of your fork.
2. Add your custom domain or subdomain in the file, for example: ```mesaredux.mysite.com```

---

### 1. Netlify
Netlify allows you to deploy a mirror with zero configuration. Use the button below to deploy directly:

**Instructions:**
1. Log in to Netlify or create an account.
2. Select your fork and the `build` branch.
4. Deploy and wait for your site to go live.

---

### 2. GitHub Pages
GitHub Pages works well for hosting static mirrors of MESλREDUX.

**Instructions:**
1. Navigate to your fork on GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to the `build` branch and root (`/`).
4. Click **Save** and wait for GitHub to publish your site.
5. Your mirror will be available at `https://<your-username>.github.io/mesaredux`.


---

### 3. Cloudflare Pages
Cloudflare Pages allows fast, globally distributed hosting.

**Instructions:**
1. Log in to [Cloudflare Pages](https://pages.cloudflare.com/).
2. Create a new project and connect it to your fork.
3. Select the `build` branch.
4. Set the **Build command** to `jekyll build` and **Build directory** to `_site`.
5. Deploy and wait for the mirror to be live.

  
---
#### To submit your mirror to be in our list on the site, simply submit a Pull Request adding it to the [JSON List](https://github.com/Bored-Entertainment/mesaredux/edit/main/assets/js/json/unofficalmirrors.json)

<sub>All mirrors will automatically stay up to date if Pull is installed and configured on your fork.</sub>
</details>

### Official Links:
- https://mesaredux.mesagrey.ca - Main site
#### Mirrors:
- https://mesaredux.the-duck.co


#### Thank You for checking out the MESλREDUX project! 
