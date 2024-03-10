import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ParasolFrontEnd} from "../../model/front-end/parasol-front-end";

@Component({
  selector: 'app-parasol',
  templateUrl: './parasol.component.html',
  styleUrls: ['./parasol.component.css']
})
export class ParasolComponent {
  @Input()
  parasol:ParasolFrontEnd = new ParasolFrontEnd()

  @Output() parasolToggle = new EventEmitter<ParasolFrontEnd>();
  transmitParasolToggle() {
    this.parasolToggle.emit(this.parasol)
  }
}
