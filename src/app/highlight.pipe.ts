import { DomSanitizer} from '@angular/platform-browser'
import { Component,Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'highlight'
})
export class HighlightSearch implements PipeTransform {
constructor(private sanitizer: DomSanitizer){}

  transform(value: any, args: any): any {console.log(value)
    if (!args) {
      return value;
    }
    // Match in a case insensitive maneer
    const re = new RegExp(args, 'gi');
    const match = value.match(re);

    // If there's no match, just return the original value.
    if (!match) {
      return value;
    }

    const value1 = value.replace(re, "<b>" + match[0] + "</b>")
    console.log(value1)
    return this.sanitizer.bypassSecurityTrustHtml(value1)
  }
}