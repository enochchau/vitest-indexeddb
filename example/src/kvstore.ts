import { openDB } from "idb";

let DB_NAME = "my-database";
let STORE_NAME = "my-store";

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    db.createObjectStore(STORE_NAME);
  },
});

export async function get(key: string) {
  return (await dbPromise).get(STORE_NAME, key);
}
export async function set(key: string, val: any) {
  return (await dbPromise).put(STORE_NAME, val, key);
}
export async function del(key: string) {
  return (await dbPromise).delete(STORE_NAME, key);
}
export async function clear() {
  return (await dbPromise).clear(STORE_NAME);
}
export async function keys() {
  return (await dbPromise).getAllKeys(STORE_NAME);
}
