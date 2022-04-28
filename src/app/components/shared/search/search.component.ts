import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchValue: any;

  constructor(private router: Router) {}


  ngOnInit(): void {}

  onSubmit(): void{
    this.search.emit(this.searchValue);
  }

  searchClicked($event: any): void{
    this.onSubmit();
  }
}
