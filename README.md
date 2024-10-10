Project Title: Country Rank Population
Project Description:
This project, built with Vite, is a web application that ranks countries by population, allowing users to compare data, view news, and toggle between light and dark modes. The app uses React for UI rendering and Axios for fetching data from APIs such as restcountries.com and New York Times API.

Table of Contents:
Features
Installation
Environment Variables
Running the Project
Technology Stack
Usage
License
Features:
Fetch and display population data for countries.
Compare country data.
View latest news filtered by category and search.
Light/Dark mode toggle with Font Awesome icons.
Responsive design.
Installation:
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory:

bash
Copy code
cd your-repo-name
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory of the project.
Refer to the .env.example file for required variables.
Run the development server:

bash
Copy code
npm run dev
Environment Variables:
The project requires specific environment variables for API access. You should create a .env file in the root directory based on the following template:

.env.example:
bash
Copy code
VITE_NYT_API_KEY=your-new-york-times-api-key
Replace the placeholder values with your actual API keys.

Running the Project:
To run the project in development mode, use the following command:

bash
Copy code
npm run dev
To build the project for production:

bash
Copy code
npm run build
To preview the production build locally:

bash
Copy code
npm run preview
Technology Stack:
Vite: Development environment
React: JavaScript framework
Axios: HTTP client for API calls
Tailwind CSS: Utility-first CSS framework
Font Awesome: Icons
Redux: State management
Usage:
Visit /home to view country population rankings.
Use the comparison tool to compare country statistics.
Navigate to /news to view the latest news articles and search/filter them.
Toggle between light and dark mode using the icon in the top right of the navbar.
License:
This project is licensed under the MIT License.

