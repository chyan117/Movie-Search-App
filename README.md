@AUTHOR Andy Chang<br/>
@Gmail kingchang33@gmail.clom

## Available Scripts

In the project directory, you can run:


### `npm start`
instruction:
on the terminal
1. react-react-app your-app-name
2. cd your-app-name
3. npm install npm install react-icons
4. npm install tachyons
5. replace the files in ./your-app-name/src by my file codingchallenge/src
6. run --> npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### ` component`
1. ./Components/Logo.js -> the logo element that stay on top of the website and will be rendered once the client click the "back to home page" button

2. ./Components/Card.js -> use to render the listed card title and it's image on the "Search Result" page.

3. ./Components/CardList.js -> list a batch of 10 results from the API and dispaly Cards elements from easy-spotting position.

4. /Components/PageController.js -> fetch the limited amount of data and list them at most four pages on the website. Setting four special signs "BackToStart", "BackToLast", "MovetoNext", "MoveToEnd".


### `technology I use`
I am sorry that I didn't create a file called index.html. I instead use pure jsx to build this website( Due to the timing concern and I am more familiar with the this framework). Every part of the component on the website is jsx.

### `improvement with more time`
The basic fucntion of this website is running well. But there are still unsolving issues. First, I haven't handle the loading fucntion and error fucntion well when the request to omdb api fail (there are gliches when move to other search page) . Second, the decoration of the webiste could be improved. I first used tachoyns to decorate the website, but on the last day, I realize it is quicker and simplier to use bootstrps to layout to colors the webiste. So if I had more time, I would fix the above issues.

