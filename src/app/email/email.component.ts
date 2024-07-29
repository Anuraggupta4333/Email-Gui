import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']  // Fixed the property name
})
export class EmailComponent implements OnInit {
  data = {
    to: "",
    subject: "",
    message: ""
  };

  flag = false;

  constructor(private email: EmailService, private snak:MatSnackBar) { }

  ngOnInit(): void { }

  doSubmitForm() {
    if(this.data.to === "" || this.data.subject === "" || this.data.message === "") {
      this.snak.open("All fields are required", "Close", {
        duration: 2000
      });
      return;    // Stop further execution if any field is empty
    }
    console.log("try to send email");
    this.flag = true;  // Show success message
    this.email.sendEmail(this.data).subscribe(
      
      (response: any) => {  // Explicitly typed 'response' parameter
        console.log("Email sent successfully", response);
        this.flag = false;
        this.snak.open("Email sent successfully", "Close", {
          duration: 2000
        });
      },
      (error: any) => {  // Explicitly typed 'error' parameter
        console.log("Failed to send email");
        console.error(error);
        this.flag = false;
        this.snak.open("Some error occur", "Close", {
          duration: 2000
        });

      }
    );
  
}
}
