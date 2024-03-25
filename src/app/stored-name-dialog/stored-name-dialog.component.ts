// stored-name-dialog.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stored-name-dialog',
  templateUrl: './stored-name-dialog.component.html',
  styleUrls: ['./stored-name-dialog.component.css'],
})
export class StoredNameDialogComponent {
  @Input() storedName: string;

  constructor() {}
  
  onNoClick(){
  }
  onYesClick(){

  }
}
