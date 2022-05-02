# Run Locally

- Move into the root directory and run `npm install`

# Live demo

- Here is the live demo of the project hosted on Vercel. [https://rick-and-morty-o6d9vzt7e-hellskater.vercel.app/](https://rick-and-morty-o6d9vzt7e-hellskater.vercel.app/)

# About Project

- This is a small Rick and Morty character database site which uses the open API provided by [https://rickandmortyapi.com/](https://rickandmortyapi.com/)

# Preview

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
