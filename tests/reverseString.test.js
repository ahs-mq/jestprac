import {reverseString} from '../src/reverseString.js';

test('returns null from empty', ()=>{
    expect(reverseString('')).toBe(null);
});

test('returns olleh from hello', ()=>{
    expect(reverseString('hello')).toBe('olleh');
});