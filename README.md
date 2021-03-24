# Making Changes to Your Site

If there is a bug that you need help fixing, fill out #include's form: https://forms.gle/vtXngacs4gXcgQ7s7

## 1. Where to find the files for each page

src -> components 

## 2. How to change images

Upload the image in this folder

public -> images 

Go to the folder for the page you want to modify (Step 1) and open the file with suffix .js

Scroll to wherever you see the image that you want to change

Example:

Uploaded a new image called UpdatedLogo.png

Before: ```<img src="images/SankofaLogo.png"/> ```

After: ```<img src="images/UpdatedLogo.png"/> ```

## 3. How to add Powerpoints / Recordings

Upload the thumbnails to this folder

src -> components -> RecordedSessions -> Thumbnails

Go to this file

src -> components -> RecordedSessions -> Materials.js

Import whatever images you need at the top (give it a unique name such as presentationImg in the following example)

Example: import presentationImg from './Thumbnails/sankofapresentation.png' 

Add this chunk of code to create a new powerpoint or recording card (look at the comments in the file)

```
{
    title: "Introduction", 
    thumbnail: presentationImg, 
    url: "https://drive.google.com/file/d/1d5lCCZnUc2iif8fBGYsiWJDrWxFM7CYX/view?usp=sharing",
},
```
