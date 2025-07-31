/* eslint-env jest */


import {capitalize} from '../src/capitalize.js';

test('hello to return Hello', ()=> {
    expect(capitalize('hello')).toBe('Hello');
});

test('Nothing to return null', ()=> {
    expect(capitalize('')).toBe(null);
});