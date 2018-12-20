import { Directive, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[scrollable]'
})
export class ScrollableDirective {

    @Output() scrollPosition = new EventEmitter()

    constructor(public elem: ElementRef) {}

    @HostListener('scroll', ['$event'])
    onScroll(event) {
        try {
            const top = event.target.scrollTop
            const height = this.elem.nativeElement.scrollHeight
            const offset = this.elem.nativeElement.offsetHeight
            if (top > height - offset - 1) {
                this.scrollPosition.emit('bottom')
            }
            if (top === 0) {
                this.scrollPosition.emit('top')
            }
        } catch (error) {

        }
    }

}