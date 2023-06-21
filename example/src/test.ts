import { describe, expect, test } from "vitest";
import * as KVStore from "./kvstore";

describe("test indexeddb kv store", () => {
  test("set and get", async () => {
    await KVStore.set("hello", "world");
    let res = await KVStore.get("hello");
    expect(res).toBe("world");
  });

  test("del", async () => {
    await KVStore.set("foo", "bar");
    await KVStore.del("foo");
    let res = await KVStore.get("foo");
    expect(res).toBe(undefined);
  });

  test("keys", async () => {
    await KVStore.set("hello", "world");
    await KVStore.set("foo", "bar");

    let keys = await KVStore.keys();
    // convert to obj since order doesn't matter
    let res = keys.reduce((acc, key) => {
      acc[key.toString()] = true;
      return acc;
    }, {} as Record<string, boolean>);

    expect(res).toEqual({ hello: true, foo: true });
  });

  test("clear", async () => {
    await KVStore.set("hello", "world");
    await KVStore.set("foo", "bar");
    await KVStore.clear();

    let res = await KVStore.keys();
    expect(res).toEqual([]);
  });
});
