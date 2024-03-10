import {Component, Input} from '@angular/core';
import {ParasolChooserFrontEnd} from "../../model/front-end/parasol-chooser-front-end";


@Component({
  selector: 'app-parasol-chooser',
  templateUrl: './parasol-chooser.component.html',
  styleUrls: ['./parasol-chooser.component.css']
})
export class ParasolChooserComponent {
  @Input()
  chooser:ParasolChooserFrontEnd= new ParasolChooserFrontEnd()

}
