import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Inject,
  HostListener,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[clickOutside]' 
})
export class ClickOutsideDirective implements OnInit{

  @Input() exclude: string = '';
  @Output() clickOutside: EventEmitter<Event> = new EventEmitter<Event>();

  private _nodesExcluded: Array<HTMLElement> = [];
  private _events: Array<string> = ['click'];

  constructor(private _el: ElementRef,) {}

  ngOnInit() {
    this._excludeCheck()
  }

  private _excludeCheck() {
    if (this.exclude) {
      try {
        const nodes = Array.from(document.querySelectorAll(this.exclude)) as Array<HTMLElement>;
        if (nodes) {
          this._nodesExcluded = nodes;
        }
      } catch (err) {
        console.error('[ng-click-outside] Check your exclude selector syntax.', err);
      }
    }
  }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
      if (!targetElement) {
          return;
      }

      const clickedInside = this._el.nativeElement.contains(targetElement);
      if (!clickedInside && !this._shouldExclude(event.target)) {
          this.clickOutside.emit(event);
      }
  }

  private _shouldExclude(target): boolean {
    for (let excludedNode of this._nodesExcluded) {
      if (excludedNode.contains(target)) {
        return true;
      }
    }
    return false;
  }

}