import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-template',
  templateUrl: './tab-template.component.html',
  styleUrls: ['./tab-template.component.scss']
})
export class TabTemplateComponent {
  isVisible = true;

  toggle() {
    this.isVisible = !this.isVisible;
  }

}
