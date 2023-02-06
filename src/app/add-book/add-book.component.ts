import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Models/Book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookRequest: Book = {
    id: 0,
    name: '',
    authorName: '',
    category: '',
    description: ''
    
  };
  constructor(private bookService: BookService , private router: Router) { }

  ngOnInit(): void {
    
  }

  addbook()
    {
      this.bookService.AddBook(this.addBookRequest)
      .subscribe({
        next: (book) => {
          console.log(book);
          this.router.navigate(['book']);
        }
        // this.router.navigate(['employees']);
      });
    }
}
