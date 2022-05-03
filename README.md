# Run Locally

- Move into the root directory and run `npm install`

# Live demo

- Here is the live demo of the project hosted on Vercel. [https://rick-and-morty-o6d9vzt7e-hellskater.vercel.app/](https://rick-and-morty-o6d9vzt7e-hellskater.vercel.app/)

# About Project

- This is a small Rick and Morty character database site which uses the open API provided by [https://rickandmortyapi.com/](https://rickandmortyapi.com/)

# Preview

<img width="941" alt="1" src="https://user-images.githubusercontent.com/47584722/166231384-63433c5b-cf06-469b-97f5-1e85b0657659.png">
<img width="938" alt="2" src="https://user-images.githubusercontent.com/47584722/166231405-a415ed00-de92-472d-8364-401e7f50313a.png">
<img width="929" alt="3" src="https://user-images.githubusercontent.com/47584722/166231448-3a5a6da0-dcfd-4a0e-a6f0-d07cbabd8462.png">
<img width="945" alt="4" src="https://user-images.githubusercontent.com/47584722/166231494-d3ee2359-3520-45d9-a2bb-348ef354c0d2.png">


## Tech-Stack

- React
- Context API
- TailwindCSS
- React Query

### External libraries

- react-paginate
- axios

### Tools

- ES-lint

## Features and pages

1. Homescreen with a header, search bar to look for characters and a list of character cards.
2. Pagination component at the bottom to switch between pages.
3. Character profile page, which the user is redirected after clicking on a character card.
4. 404 page when a bad url is entered.

## Folder Structure

- The `index.html` fie is stored in the public folder.
- All the code is stored inside the `src` folder.
- Individual components are stored in `src/components`
- The routes are defined in the `src/App.js`
- Context provider files are defined in `src/context`
- All the api queries and context consumer hooks are stored in `src/hooks`

## Scripts

- `npm start`: To start the development server on localhost
- `npm test`: To run the testing scripts
- `npm run lint`: To run ES-lint
