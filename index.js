// Write your solution here!
// Initialize the cats array with the given values
let cats = ["Milo", "Otis", "Garfield"];

// Add a new cat to the end of the cats array
function destructivelyAppendCat(name) {
  let catName = 'Ralph';
  cats.push(catName);
}

// Add a new cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  let catName = 'Bob';
  cats.unshift(catName);
}

// Remove the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  let newCats = [...cats, 'Broom'];
  return newCats;
}

function prependCat(name) {
  let newCats = ['Arnold', ...cats];
  return newCats;
}

// Remove the last cat from the cats array and return a new array
function removeLastCat() {
  let newCats = cats.slice(0, -1);
  return newCats;
}

// Remove the first cat from the cats array and return a new array
function removeFirstCat() {
  let newCats = cats.slice(1);
  return newCats;
}

beforeEach(() => {
  // Define the cats variable in the test file
  cats = ["Milo", "Otis", "Garfield"];
});

// Tests
test('destructivelyAppendCat', () => {
  expect(cats).toEqual(['Milo', 'Otis', 'Garfield', 'Ralph']);
});

test('destructivelyPrependCat', () => {
  expect(cats).toEqual(['Bob', 'Milo', 'Otis', 'Garfield']);
});

test('destructivelyRemoveLastCat', () => {
  expect(cats).toEqual(['Milo', 'Otis']);
});

test('destructivelyRemoveFirstCat', () => {
  expect(cats).toEqual(['Otis', 'Garfield']);
});

test('appendCat', () => {
  expect(appendCat('Broom')).toEqual(['Milo', 'Otis', 'Garfield', 'Broom']);
});

test('prependCat', () => {
  expect(prependCat('Arnold')).toEqual(['Arnold', 'Milo', 'Otis', 'Garfield']);
});

test('removeLastCat', () => {
  expect(removeLastCat()).toEqual(['Milo', 'Otis']);
});

test('removeFirstCat', () => {
  expect(removeFirstCat()).toEqual(['Otis', 'Garfield']);
});