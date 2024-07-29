import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  btnClick() {
    console.log("btn clicked");
    this.snackBar.open("Button Clicked", "Close", {
      duration: 2000,
    });
  }
}
