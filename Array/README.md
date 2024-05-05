# CustomArray Class Documentation

The `CustomArray` class represents a custom implementation of an array data structure in TypeScript.

## Constructor

### `constructor()`

- Initializes a new CustomArray instance.
- Sets the `length` property to 0.
- Initializes an empty object `data`.

## Methods

### `push(value: any): number`

- Adds an element to the end of the CustomArray.
- Returns the new length of the array after adding the element.

### `pop(): any`

- Removes the last element from the CustomArray.
- Returns the removed element.

### `get(index: number): any`

- Retrieves the element at the specified index in the CustomArray.
- Returns the element at the specified index.

### `delete(index: number): any`

- Removes an element from the specified index in the CustomArray.
- Returns the removed element.

## Private Methods

### `shiftIndex(index: number)`

- Shifts the elements in the array to the left starting from the specified index.
- Removes the last element of the array.
- Decreases the length of the array by 1.

## Example Usage

```typescript
const customArray = new CustomArray();

// Adding elements to the array
customArray.push("Prakhar");
customArray.push("Srivastava");

console.log(customArray); // CustomArray { length: 2, data: { '0': 'Prakhar', '1': 'Srivastava' } }

// Removing the last element
customArray.pop();

console.log(customArray); // CustomArray { length: 1, data: { '0': 'Prakhar' } }

// Adding more elements
customArray.push("Hi");
customArray.push("I");
customArray.push("am");
customArray.push("developer");

console.log(customArray); // CustomArray { length: 5, data: { '0': 'Prakhar', '1': 'Hi', '2': 'I', '3': 'am', '4': 'developer' } }

// Deleting an element at index 2
customArray.delete(2);

console.log(customArray); // CustomArray { length: 4, data: { '0': 'Prakhar', '1': 'Hi', '2': 'am', '3': 'developer' } }

```