import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as sanitizeHtml from 'sanitize-html';

@Pipe({
  name: 'safeHtml'
})
export class HtmlSanatizePipe implements PipeTransform {
  constructor(
    private sanatizer: DomSanitizer
  ) {

  }

  transform(val: string): SafeHtml | null {
    if (val) {
      const cleaned = sanitizeHtml(val.toString(), {
        allowedTags: [
          'div', 'p', 'b', 'video', 'audio', 'source', 'a', 'span', 'strong', 'small', 'em', 's', 'img',
          'table', 'thead', 'tbody', 'tfooter', 'tr', 'th', 'td',
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
          'ol', 'ul', 'li',
          'br', 'hr'
        ],
        allowedAttributes: {
          '*': ['style'],
          'a': ['href', 'target'],
          'img': ['src', 'width', 'height'],
          'source': ['src'],
          'video': ['controls'],
          'audio': ['controls']
        }
      });
      return this.sanatizer.bypassSecurityTrustHtml(cleaned);
    }
    else {
      return null;
    }
  }

}
