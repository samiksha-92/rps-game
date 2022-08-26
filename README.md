<a href ="https://samiksha-92.github.io/rps-game/" target = "_blank"> View the live project here </a>

# Rps Game 

Rps game is a simple and interesting website in which a user can enjoy playing this game against the computer.

This game was made using Html, css and vanilla Javascript and provides 3 options to choose from (Rock, paper, scissors).
To keep things simple, the user can play as many turns as he/she wants and can restart a game if the user is unhappy with scores or tired of winning against the computer 😁

<img src = "assets/images/site responsiveness img.png">

## **Features**
<hr>

### **Existing features:**

- **Rock Paper Scissors Heading Area:**
1. Featured at the top of the page the user, upon arriving at the website, can clearly see the name of the name.
2.  The background color used is white and the font color is black for contrast.
<img src = "assets/images/screenshots of rps features/heading.png">

- **Scoreboard Area:**
1. This area will allow the user to see the their scores and also the computer's score in integers.
2. After each user's turn, the scoreboard will increment either user's score or computer's score based on the outcome
3. The scores remain unchanged if it's a draw.
<img src = "assets/images/screenshots of rps features/scoreboard screenshot.png">

- **Result Area:**
1. This area displays the result to the user in a more elaborate way, where in the user can clearly see their choice versus the computer's.
2. The purpose of this area is to eliminate ambiguity and present the user the outcome of his turn in a simple sentence.
<img src= "assets/images/screenshots of rps features/result area screenshot.png">

- **Choices Area:**
1. This area displays the various choices available to the user rock , paper and scissors images respectively.
2. The border of each user's choice also changes color, giving the user a more visual cue of the outcome of his/her turn.
3. When the user hovers over any choice, the background of the choice has a color change to gray.
4. However, For example, the border changes color to green. if the user's choice was rock and the computer's choice was paper or red when the computer wins. In case of a draw, the border color remains unchanged.
<img src = "assets/images/screenshots of rps features/choices screenshot.png">

- **Restart Game:**
1. The purpose of this button is to provide a way to the user to end his/her game and start a new one.
2. Once the user starts a new game, his/her score and the computer's score set to 0 and a new game begins.
<img src = "assets/images/screenshots of rps features/restart button screenshot.png">


# Testing

The W3C Markup Validator, W3C CSS Validator Services and JShint were used to validate the code on this website.
- <a href ="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsamiksha-92.github.io%2Frps-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en" target="_blank"> W3C Markup CSS Validator Results. There were 0 errors found with 1 warning.</a>
- No media queries were used in css. However, the website is fully responsive across all devices. Testing has been done on the following devices :
1. iPhone 12 Pro
2. Pixel 5 
3. Samsung Galaxy S8
4. ipad Air
5. ipad Mini
6. MacBook Pro
- <a href = "https://validator.w3.org/nu/?doc=https%3A%2F%2Fsamiksha-92.github.io%2Frps-game%2F" target ="_blank"> W3C Markup HTML Validator Results. There were 0 errors found.</a>
- No errors were found during the testing of Javascript code on <a href = "https://jshint.com/" target ="_blank"> JShint</a> However there were 17 warnings found upon testing. The following metrics were returned :
1. There are 8 functions in this file.
2. function with the largest signature take 2 arguments, while the median is 1.
3. Largest function has 8 statements in it, while the median is 3.
4. The most complex function has a cyclomatic complexity value of 10 while the median is 1.
- Lighthouse check was also run on the website to assess key performance areas. The results can be seen below
<img src = "assets/images/lighthouse screenshot.png">


## **Known Bugs:**
- No known bugs

## **Features to be Added:**
- Image of computer's choice will be added to this project, so that the user can understand the result in a better way visually after every turn.


## **Deployment**
<hr>

The website was deployed using Github pages using the following steps:

1. Log in to GitHub and locate the GitHub Repository.
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.</li>
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

<br>

## **Forking the Github Repository**
<hr>
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps below:

1. Log in to GitHub and locate the GitHub Repositor.
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

<br>

## **Making a Local Clone**

1. Log in to GitHub and locate the <a href="https://github.com/samiksha-92/rps-game" target="_blank">Github Repository</a>
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", and copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type <code>git clone </code>, and then paste the url copied in step 3. 
<code>$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY</code>

Press Enter. Your local clone will be created.<br>
<code> $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done. <br>
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
</code>
<br>
<a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop" target="_blank"> Click here</a> to see detailed instructions with images.
<br> 

## **Credits**

<hr>


## **Code**
- The understanding of win, lose and game functions were made possible thanks to <a href = "https://www.whatsdev.com/js-course-free" target = "_blank" >this free course on Javascript by Tenzin. </a>
- The understanding of reload function code was made possible using <a href = "https://www.w3schools.com/jsref/met_loc_reload.asp" target ="_blank">W3Schools.
- A lot of understanding of Javascript concepts on this project was made possible thanks to <a href = "https://www.youtube.com/c/CodeWithHarry" target ="_blank"> this Youtube channel </a>

## **Content**

- The content on this project was provided by me except the media.

## **Media**

- The images of rock, paper, scissors were taken from <a href = "https://icons8.com/" target = "_blank"> this website </a>

### **Acknowledgements**

-  My mentor Jack Wachira for continuous feedback and suggestions for improvements on my projectwork. 
- My husband Dushyant Sabharwal for his support and feedback on my projectwork.













