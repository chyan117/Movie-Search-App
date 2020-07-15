@AUTHOR Andy Chang
@Gmail kingchang33@gmail.clom

## Available Scripts

In the project directory, you can run:

### `npm start`
instruction:
cd codingchallenge ---> run 'npm start' to activate the react app.

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

