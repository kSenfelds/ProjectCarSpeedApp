# CarAverageSpeedsApp

CarAverageSpeedsApp is a web application that analyzes and visualizes car speed data. User is able to upload car speed data files, filter them by various criteriea or display data in a graphic.

## Functionality

The CarAverageSpeedsApp offers the following functionality:

1. **File Upload**: Users can upload data files, which are processed and stored in a database.

2. **Filter Results**: Users can apply filters to the data, to retrieve specific records that meet the criteria.

3. **Graphic**: By selecting a specific date users can see average speeds of cars by hour in the selected date, which are displayed in a chart.

## Problems Encountered

During the developement, the following problems was encontered:

1. **Loading times**: There were difficulties to minimize the time taken for app to process the file and uploading the data to database. However a different approach was used to first put all the data in an array of data and then sent to the API, which resulted in a lower loading time.

2. **Finding a suitable structure for the app*: There were difficulties figuring out an effective way to structure and organize this application. The goal was to find a suitable structure that would improve apps maintainability, efficient code organization and scalability. 

## Future Improvements

1. **Unit tests**: Implementing unit tests for API and React components could improve app maintainability.
2. **File upload load time**: Sending a direct file to api and implimenting a function that handles the file in API side of the project could lead to faster loading the files to the database.

## Launch Instructions

To run the application, follow these steps:

### Prerequisites

-[.NET SDK](https://dotnet.microsoft.com/download)
-[Node.js](https://nodejs.org)

### Setup
1. Make sure you have both the .NET SDK and Node.js installed on your machine.
2. Download the CarAverageSpeedsApp and build the project.
3. Launch the CarSpeedAPI.exe file and it should do the rest.

## Author

This application was developed by Kristaps Šēnfelds

## Screenshots


