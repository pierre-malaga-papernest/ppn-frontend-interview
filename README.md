# Front-End Developer Technical Interview Task

## 📝 Task Description

We are seeking a Front-End Developer to join our team. This technical task is designed to assess your ability to navigate, debug, and improve an existing Angular codebase. The application is a prototype that currently contains various intentional errors, ranging from simple bugs and compilation issues to deeper architectural "code smells" that violate clean code principles.

## 🛠 Task Details

The application is built with **Angular** and **NgRx**. You will find errors and areas for improvement in:
- **AppComponent & UserListComponent**: Handling of data binding, events, and lifecycle.
- **Redux Store**: Implementation of actions, reducers, and effects.
- **Services**: Data fetching and business logic.
- **Unit Tests**: Fixing broken tests and improving coverage.

## 🔍 What We Look For

We evaluate your submission based on:
- **Debugging Skills**: Technical accuracy in identifying and fixing intentional errors.
- **Clean Code & Architecture**: Your ability to recognize and refactor code that violates **SOLID principles** (e.g., improving separation of concerns, removing nested subscriptions, and ensuring single responsibility in classes).
- **RxJS Proficiency**: Efficient use of reactive patterns and operators.
- **TypeScript Best Practices**: Proper utilization of types and interfaces, and ensuring the code is robust and maintainable.
- **Quality Assurance**: Writing meaningful unit tests that validate the logic, not just the existence of code.

## 📋 Instructions

1.  Clone this repository.
2.  Create a new branch following the pattern `code-review/your-name`.
3.  Fix all errors (build-time and runtime) and refactor logic where necessary.
4.  Write additional unit tests for the fixed components/services.
5.  Submit your code via a Pull Request or a zip file as instructed by your recruiter.

## ✅ Definition of Done

Your task is considered complete when:
- [ ] The application compiles and runs without errors in the browser console.
- [ ] The user data loading flow (Redux) works from end-to-end.
- [ ] All "code smells" and architectural flaws have been refactored for better maintainability.
- [ ] All existing and new unit tests pass.
- [ ] The code is well-documented where necessary, explaining any major design decisions or assumptions made during refactoring.

---
This test is the opportunity to show your skills, don't hesitate to implement anything you think can be of value here to be able to present a working project with a nice UI on the Technical Interview. Best of luck! We look forward to seeing your approach to these challenges.
