'use strict';

const fakeIndexDb = require('fake-indexeddb');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const fakeIndexDb__default = /*#__PURE__*/_interopDefaultCompat(fakeIndexDb);

function setup() {
  if (!globalThis.indexdDB) {
    globalThis.indexedDB = fakeIndexDb__default;
    globalThis.IDBRequest = fakeIndexDb.IDBRequest;
    globalThis.IDBCursor = fakeIndexDb.IDBCursor;
    globalThis.IDBCursorWithValue = fakeIndexDb.IDBCursorWithValue;
    globalThis.IDBDatabase = fakeIndexDb.IDBDatabase;
    globalThis.IDBIndex = fakeIndexDb.IDBIndex;
    globalThis.IDBKeyRange = fakeIndexDb.IDBKeyRange;
    globalThis.IDBObjectStore = fakeIndexDb.IDBObjectStore;
    globalThis.IDBOpenDBRequest = fakeIndexDb.IDBOpenDBRequest;
    globalThis.IDBRequest = fakeIndexDb.IDBRequest;
    globalThis.IDBTransaction = fakeIndexDb.IDBTransaction;
    globalThis.IDBVersionChangeEvent = fakeIndexDb.IDBVersionChangeEvent;
  }
}

exports.setup = setup;
