import { Component, OnInit } from '@angular/core';
import { booksModel} from './books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  // books: [{
  //   title:'';
  //   author:'';
  //   genre:'';
  //   image:''
  // }] 

  constructor() { }

  ngOnInit(): void {
  }

}
