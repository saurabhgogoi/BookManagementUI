import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Models/Book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.GetAllBook().subscribe((data: Book[])=>{
      this.books=data;
      console.log(this.books)
    });
  }
}
