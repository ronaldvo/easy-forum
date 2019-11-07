import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { toArray, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-very-simple-grid',
  templateUrl: './very-simple-grid.component.html',
  styleUrls: ['./very-simple-grid.component.css']
})
export class VerySimpleGridComponent implements OnInit {

  @Input() data: Observable<any>;
  @Input() showId: boolean = true;
  @Input() columns: Array<string>;
  @Input() reverse: boolean = false;
  @Output() rowClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.reverse) {
      this.data.pipe(
        toArray(),
        mergeMap(data => data.reverse())
      );
    }
  }

  rowClick(row) {
    this.rowClicked.emit(row);
  }

}
