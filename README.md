# Highcharts Node.js App

This project demonstrates how to integrate Highcharts into a Node.js application to display random test data using only JavaScript.

> This project is a proof of concept (POC) for generating charts with Highcharts through a Node.js backend. Useful as a demo or learning tool for backend chart/image generation.

## Project Status

:bulb: Demo/POC only – not intended for production use.

## Tech Stack

- Node.js
- Express
- Highcharts
- (optionally: Puppeteer or Headless Chrome for rendering)

## Project Structure

```
highcharts-node-app/
├── public/
│   ├── index.html
│   └── app.js
├── server.js
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js and npm should be installed on your system.

### Steps to Set Up the Project

1. **Clone the repository** (if using version control):

   ```bash
   git clone git@github.com:szymoniwacz/highcharts-node-app.git
   cd highcharts-node-app
   ```

2. **Initialize a new Node.js project** (if not already done):

   ```bash
   npm init -y
   ```

3. **Install the necessary dependencies**:

   ```bash
   npm install express
   ```

### Running the Application

1. **Start the server**:

   ```bash
   node server.js
   ```

2. **Open your browser and navigate to** `http://localhost:3000`

You should see a line chart displaying random test data.

## Usage Example

Once the app is running, make a GET request to `/api/chart` and it will return a chart as an image.

```sh
curl http://localhost:3000/api/chart --output example.png
```

## License

This project is licensed under the MIT License.
