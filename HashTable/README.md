# CustomHashTable Class

A custom hash table implementation in TypeScript.

## Constructor

### `constructor(size: number)`

Creates a new instance of CustomHashTable with the specified size.

- `size`: The size of the hash table.

## Methods

### `set(key: any, value: any): any[]`

Sets a key-value pair in the hash table.

- `key`: The key to be stored.
- `value`: The value associated with the key.
- Returns: The updated data array.

### `get(key: any): any`

Retrieves the value associated with the given key.

- `key`: The key whose value needs to be retrieved.
- Returns: The value associated with the key, or `undefined` if the key is not found.

### `keys(): any[]`

Returns an array containing all the keys present in the hash table.

- Returns: An array of keys.

## Example Usage

```typescript

const myCustomHashTable = new CustomHashTable(50);
myCustomHashTable.set("grapes", 1000);
myCustomHashTable.set("apples", 500);

console.log(myCustomHashTable.get("grapes")); // Output: 1000
console.log(myCustomHashTable.get("grapessssssssss")); // Output: undefined
console.log(myCustomHashTable.keys()); // Output: ["grapes", "apples"]

```