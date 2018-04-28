import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { OutputType } from "@angular/core/src/view";

@Component({
  selector: "app-component-interaction-child",
  template: `
      <div style="border:1px solid red; margin-top:50px;padding: 20px;">
        <h3>Child Component</h3>
        <p>
          The first name is : {{firstName}}
        </p>
        <button type="button" (click)="search()">Search</button>
      </div>
  `,
  styleUrls: ["./component-interaction-child.component.css"]
})
export class ComponentInteractionChildComponent implements OnInit {

  @Input() firstName: string;
  @Output() doSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  search() {
    this.doSearch.emit();
  }

}
