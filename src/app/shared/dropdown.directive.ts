import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
    //* to attach and dettach the css class dynamically, this will be added as property   
  @HostBinding('class.open') openDropdown: boolean = false;

  //* angular should listen to event that happened
  @HostListener('click') toggleOpen() {
    this.openDropdown = !this.openDropdown;
  }
}
