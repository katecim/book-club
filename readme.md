# 📚 Book Club Blog

> A simple, Book Club blog application for viewing and posting reviews, built with Node.js and EJS.


![Screenshot](public/images/bookClubScreenshot.png)

---

## ✨ Features

* **Book of the Month:** Displays a featured book with its title, author, and description.
* **Featured Reviews:** Shows a list of pre-written reviews.
* **Full CRUD Functionality:** Users can manage their own reviews:
    * **Create:** Add a new review using a simple form.
    * **Read:** View all posted reviews.
    * **Update:** Edit an existing review.
    * **Delete:** Remove a review.

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or later)
* npm (comes bundled with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/katecim/book-club.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Blog-Project
    ```

3.  **Install the required dependencies:**
    ```bash
    npm install
    ```

4.  **Run the application:**
    ```bash
    node app.js
    ```
    *For development, it's recommended to use `nodemon` for automatic server restarts on file changes:*
    ```bash
    nodemon index.js
    ```

5.  **Open your browser:**
    Visit `http://localhost:3000` to see the application running.

---
## 💻 Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend (Templating):** EJS (Embedded JavaScript)
* **Styling:** CSS3
* **Data:** All data is stored in-memory in local variables (no database).

---