// TODO: Install the following package:
import { openDB } from "idb";

// TODO: Complete the initDb() function below:
const initdb = async () => {
  openDB("todos", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("todos")) {
        console.log("todos database already exists");
        return;
      }
      db.createObjectStore("todos", { keyPath: "id", autoIncrement: true });
      console.log("todos database created");
    },
  });
};

// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email) => {
  console.log("Post to the ase");
  const todosDb = await openDB("todos", 1);
  const tx = todosDb.transaction("todos", "readwrite");
  const store = tx.objectStore("todos");
  const request = store.add({ todo: content });
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
  console.log("GET from the database");
  const todosDb = await openDB("todos", 1);
  const tx = todosDb.transaction("todos", "readonly");
  const store = tx.objectStore("todos");
  const request = store.get(id);
  const result = await request;
  console.log("result.value", result);
  return result;
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  console.log('DELETE from the database', id);
  const todosDb = await openDB('todos', 1);
  const tx = todosDb.transaction('todos', 'readwrite');
  const store = tx.objectStore('todos');
  const request = store.delete(id);
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
