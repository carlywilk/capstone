# Project Title
**Queer Health Hub (QHH)**


<img src="./src/assets/logo/qhh-logo.svg" width="200">


## Overview
Queer Health Hub is a local resource for 2SLGBTQIA++ people in the City of Toronto that aims to increase access to information, resources, and healthcare service providers.


Server API Repo can be found [here](https://github.com/carlywilk/capstone-api.git)


## Features
The website includes a map of Toronto with 15 clickable pins, each of which pulls up information on a different resource.

Each email, phone number, and website link is clickable, allowing the user to navigate to whichever resource they wish easily. 

Each resource card includes a list of services offered to help guide the user towards the resource that is right for them.

There is a scroll to top button on each page that appears after the user scrolls down a certain amount.
The map view page for users that are viewing the site on mobile width keeps the landing page on mobile screens tidy and simple. 



## Screenshots
**Mobile User**

<img src="./src/assets/gifs/carly-wilk-capstone-mobile.gif" width="320">



**Desktop User**
<img src="./src/assets/gifs/carly-wilk-capstone-desktop.gif" width="850">



## Instructions & Installation

### Tech Stack
- npm
- react-router-dom
- sass
- axios
- @vis.gl/react-google-maps
- @mui/base


### Environment Variables
To run this project, you will need to add the following environment variables to your client-side .env file.
```
REACT_APP_SERVER_URL=
REACT_APP_GOOGLE_API_KEY=
REACT_APP_GOOGLE_MAP_ID=
```


### Run Locally 
1. Clone the project repositories:
```
git clone https://github.com/carlywilk/capstone.git
```

2. Go to the project directory:
```
cd carly-wilk-capstone
```

3. Install dependencies:
```
npm install
```

4. Start the servers:
```
npm start
```


## API Reference

#### Get all resources
```
  GET /api/resources
```
| Parameter   | Type     | Description                |
| :---------- | :------- | :------------------------- |
| `serverUrl` | `string` | **Required:** Server URL   |

#### Get one resource
```
  GET /api/resources/${id}
```
| Parameter       | Type      | Description                       |
| :-------------- | :-------- | :-------------------------------- |
| `serverUrl`     | `string`  | **Required:** Server URL          |
| `resource_id`   | `integer` | **Required:** ID of resource      |

#### Get all service types for one resource
- Service filter utility is not implemented in the current version of app, there this call is not currently in use. 
```
  GET /api/resources/${id}/services
```
| Parameter        | Type      | Description                                   |
| :--------------- | :-------- | :-------------------------------------------- |
| `serverUrl`      | `string`  | **Required:** Server URL                      |
| `resource_id`    | `integer` | **Required:** ID of resource                  |
| `service_type`   | `string`  | **Required:** Service type (eg. Primary Care) |


## Insights and Lessons Learned
- While creating the knex call on my server side to select service by type was simple, implementing a filter function for services offered on the list view page was much more difficult than anticipated. A larger period of time needs to be dedicated to coding this utility. 
- The Google Maps API documentation, while thorough, is extremely complicated and confusing. Much more time is needed in order to implement the map utility with customizations, including custom markers, info windows, and more. 

## Next Steps and Future Directions
- Continuous addition of resources to the database to make it as comprehensive as possible.
- Further design features on the map to make it more user friendly, including different pin styles and / or colors.
- Addition of a filter function on the list view page for the user to only view resources that offer the specific service they are looking for.
- Ideally, this app would be extended past the City of Toronto, into the GTA and beyond in order to be a hub for users in multiple towns and cities. The addition of a user component to the site, where users can submit their resource recommendations and feedback, would make the compilation of resources more manageable for the admin of the app. 