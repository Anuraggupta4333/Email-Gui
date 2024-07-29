# Email GUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Overview

This project provides a user interface for composing and sending emails. It utilizes Angular and Angular Material for the frontend and a Spring Boot service for the backend.

## Features

### Frontend (Angular)

- **Form Fields**:
  - **Recipient**: Input field for the recipient's email address.
  - **Subject**: Input field for the email subject.
  - **Message**: Textarea for the email body.

- **Progress Bar**:
  - Displays during form submission to indicate progress.

- **Buttons**:
  - **Send**: Submits the form data to the backend.
  - **Reset**: Clears all form fields.

### Backend (Spring Boot)

- **API Endpoint**:
  - **POST** `/api/sendEmail`
    - **Description**: Sends an email using the provided details.
    - **Request Body**:
      ```json
      {
        "to": "recipient@example.com",
        "subject": "Email Subject",
        "message": "Email Body"
      }
      ```

# Other Information

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
