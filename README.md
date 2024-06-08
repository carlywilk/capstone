# Project Title
**Queer Health Hub (QHH)**


<img src="./src/assets/logo/e5.png" width="100">


## Overview
Queer Health Hub is a local resource for 2SLGBTQIA++ people in the City of Toronto that aims to increase access to information, resources, and healthcare service providers.


Server API Repo can be found [here](https://github.com/carlywilk/capstone-api.git)


## Features
Deployed website can be found [here]()


## Screenshots


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
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required:** Your API key |

#### Get one resource
```
  GET /api/resources/${id}
```
| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `api_key` | `string` | **Required:** Your API key & ID of resource  |

#### Get all services types for one resource
```
  GET /api/resources/${id}/services
```
| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `api_key` | `string` | **Required:** Your API key & ID of resource  |


## Insights and Lessons Learned


## Next Steps and Future Directions

