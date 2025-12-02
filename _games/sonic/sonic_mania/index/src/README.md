# Sonic Mania Plus Web Port

WebAssembly Port of Sonic Mania, which includes the Mania Plus DLC

Demo Site of This Project: http://dummydomain.x10.mx/sonicmania/RSDKv5.html

![image](https://github.com/burnedpopcorn/SonicManiaPlusWebPort/blob/main/sm%2Bimages/sm%2Btitle.png)

### About Repository
I did not compile this myself, all I did was fork it from VinMannie, thanks to him for doing it for me

> [!WARNING]
> There aren't many issues with this port, except an obvious one, being that:
> - Main Menu Crashes when Pressing any Key
>
> Luckily there is a workaround for this
> - By pressing the ESC Key, you can enter the Debug Menu, which has many options, including a Level Select, so you can play all the levels using that method
>
>  ![image](https://github.com/burnedpopcorn/SonicManiaPlusWebPort/blob/main/sm%2Bimages/sm%2Bdevmenu.png)

### To Run this yourself
- Get the files from this repo (Code -> Download ZIP)
- Put the files in a web server (Because this was made with Emscripten, it CANNOT be run locally with the file:// protocol, as that results in CORS issues because of Emscripten Limitations)
- Open RSDKv5.html from within your website (https:// (your domain) /RSDKv5.html)

> Or you could place all the files into the root of your github.io repo and host it through github.io pages

### To run this Locally
If you want to run this locally, use something like python to run a temporary web server on your machine

To do this using Python, you do by
- Again, Get the files from this repo (Code -> Download ZIP)
- Entering the directory containing RSDKv5.html and other files and typing the command python3 -m http.server in the linux terminal or py -m http.server for windows powershell given you installed python
- At which point you can enter http://localhost:8000/RSDKv5.html to play the game locally
