# leaflet-challenge
## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Instructions
The instructions for this activity are broken into two parts:
* Create the Earthquake Visualization

##Create the Earthquake Visualization
* Get your dataset by visiting the USGS GeoJSON links and choose a dataset to visualize.

<img width="1305" alt="Screenshot 2024-04-01 at 1 36 57 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/011f72f5-fe8e-4ed3-833b-cb9300cec81e">


* Import and visualize the data by doing the following:
  * Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

<img width="1313" alt="Screenshot 2024-04-01 at 1 38 48 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/68d8106d-da4e-45e2-a8b0-160188947092">
<img width="1313" alt="Screenshot 2024-04-01 at 1 39 00 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/11da7bff-bb12-4cd1-ae0c-e3562133050a">


  * Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

<img width="1313" alt="Screenshot 2024-04-01 at 1 41 34 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/f7676a8a-01f6-4c96-8813-5e9c1f0859b2">
<img width="1313" alt="Screenshot 2024-04-01 at 1 40 08 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/0ea636b8-8f99-42ae-a10b-5e0434e078e2">


  * Include popups that provide additional information about the earthquake when its associated marker is clicked.

<img width="1313" alt="Screenshot 2024-04-01 at 1 42 28 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/5c1f6f84-1c35-4921-aa08-526cd455de82">


  * Create a legend that will provide context for your map data

<img width="1313" alt="Screenshot 2024-04-01 at 1 43 06 PM" src="https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/fd23a6b4-ddb9-4fbb-b1cd-3e5c11eb5d1b">

## Results
The code displayed the following results on an interactive webpage for the user. This webpage is able to feature multiple "layers" so that the user has the ability to change between a more detailed map and a less detailed map as well as the ability to display the information using different methods such as a heatmap to show the greatest area of concentration and plotting each individual earthquake itself. 

![2-BasicMap](https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/f0278cc0-6949-4f6f-bf0a-1d25ad88785f)
![Cluster](https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/6fc0ba2f-6329-47d6-a0c2-62f9358637d7)
![Heat](https://github.com/mattflanagan2/belly-button-challenge/assets/146908072/e7397a08-e1d7-4bcf-965c-49e1dfdb9bef)




