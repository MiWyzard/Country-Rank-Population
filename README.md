# Country Rank Population

## Project Description
This project is built with **Vite** and is a web application that ranks countries by population, allows users to compare data, view news, and toggle between light and dark modes. The app uses React for the UI, and Axios for fetching data from APIs such as `restcountries.com` and the `New York Times` API.

## Features
- Fetch and display population data for countries.
- Compare country data.
- View the latest news filtered by category and search.
- Light/Dark mode toggle with Font Awesome icons.
- Responsive design.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/miwyzard/country-rank-population.git
   ```
2. **Navigate to the project directory:**
    ```bash
    cd country-rank-population
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Set up environment variables:**
- Create a .env file in the root directory.
- Refer to .env.example for the required variables.
5. **Run the development server:**
    ```bash
    npm run dev
    ```

## Environment Variables
Create a .env file in the root directory with the following structure:

### .env.example:
    ```bash
    VITE_NYT_API_KEY=your-new-york-times-api-key
    Replace your-new-york-times-api-key with your actual API key.
    ```

## Running the Project
To run the project in development mode, use:
    ```bash
    npm run dev
    ```
To build the project for production:
    ```bash
    npm run build
    ```
To preview the production build locally:
    ```bash
    npm run preview
    ```
## Technology Stack
 - **Vite**: Development environment
 - **React**: JavaScript framework
 - **Axios**: HTTP client for API calls
 - **Tailwind CSS**: Utility-first CSS framework
 - **Font Awesome**: Icons
 - **Redux**: State management
### Usage
- Visit /home to view country population rankings.
- Use the comparison tool to compare country statistics.
- Navigate to /news to view the latest news articles and search/filter them.
- Toggle between light and dark mode using the icon in the top right of the navbar.
- This will start the development server, and you can view the project by navigating to http://localhost:5173.

## License
This project is licensed under the MIT License.