import {Cache} from "../src/cache";

//test('it fails', () => {
//    expect(false).toBe(true);
//});

test('get value', () => {
    const testCache =  new Cache();

    let key = 'tkey';
    let value = 'tvalue';
    testCache.set(key, value);
    expect(testCache.get(key)).toBe(value);
});

test('get value', ()=> {
    const testCache = new Cache();

    let key = 'tkey';
    let value = 'tvalue';
    testCache.set(key, value, 2);
    expect(testCache.get(key)).toBe(value);
});

test('heap decreasing', ()=> {
    const testCache = new Cache();

    let key = 'tkey';
    let value = 'tvalue';
    testCache.set(key, value, 2);
    testCache.get(key);
    expect(testCache.getCount(key)).toBe(1);
});

test('get null value by end heap count', () => {
    const testCache = new Cache();

    testCache.set('tkey', 'tvalue', 0);
    expect(testCache.get('tkey')).toBeNull();
});

test('get null value', () => {
    const testCache = new Cache();

    testCache.set('tkey', null, 3);
    expect(testCache.get('tkey')).toBeNull();
});
