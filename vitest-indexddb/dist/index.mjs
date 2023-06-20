import fakeIndexDb, { IDBRequest, IDBCursor, IDBCursorWithValue, IDBDatabase, IDBIndex, IDBKeyRange, IDBObjectStore, IDBOpenDBRequest, IDBTransaction, IDBVersionChangeEvent } from 'fake-indexeddb';

function setup() {
  if (!globalThis.indexdDB) {
    globalThis.indexedDB = fakeIndexDb;
    globalThis.IDBRequest = IDBRequest;
    globalThis.IDBCursor = IDBCursor;
    globalThis.IDBCursorWithValue = IDBCursorWithValue;
    globalThis.IDBDatabase = IDBDatabase;
    globalThis.IDBIndex = IDBIndex;
    globalThis.IDBKeyRange = IDBKeyRange;
    globalThis.IDBObjectStore = IDBObjectStore;
    globalThis.IDBOpenDBRequest = IDBOpenDBRequest;
    globalThis.IDBRequest = IDBRequest;
    globalThis.IDBTransaction = IDBTransaction;
    globalThis.IDBVersionChangeEvent = IDBVersionChangeEvent;
  }
}

export { setup };
