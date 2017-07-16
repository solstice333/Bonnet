import { Pipe, PipeTransform } from '@angular/core';

// capitalize strings. |value| is required. If only |value| is supplied, 
// the first character of the string is capitalized. |start| is optional
// and if supplied represents the index of the character to capitalize.
// |end| is optional, and if supplied, capitalizes the range of characters
// between |start| and |end|, where |end| is exclusive.
//
// Usage:
//  word | capitalize[:<start>:<end>]
// Example:
//  {{ 'foo' | capitalize }} // Foo
//  {{ 'foo' | capitalize:1 }} // fOo
//  {{ 'foo' | capitalize:0:2}} // FOo
@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
    transform(value: string, start: number=0, end: number=start + 1): string {
        let result = "";
        let buf = value.split('');
        buf.forEach((val, i) =>
            result += i >= start && i < end ? val.toUpperCase() : val)
        return result;
    }
}