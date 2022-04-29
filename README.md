# Covid-19 information

#### Covid-19 Total Information, Countrywise DataTable, Charts & spreding of COVID overtime map.

[Live Site](https://covid19information.netlify.app/)

#### Setup
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

For detailed explanation on how NuxtJS work, check out the [documentation](https://nuxtjs.org).

#### Applied
`NuxtJS` `Nuxt Leaflet` `OpenStreetMap` `ChartJS` `Axios` `Fontawesome` `Bootstrap`

#### APIs From
`https://disease.sh/docs/`

#### Directory Structure
```
.
|--- assets
|     |--- css
|     |--- svg
|
|--- components
|     |--- covid-overtime                        # Components for 'covid-overtime' page
|     |--- home                                  # Components for 'home' page
|     |     |--- country-breakdown  
|     |     |     |--- country-table  
|     |     |     ...
|     |     |
|     |     |--- counts  
|     |     |--- info-chart  
|     |     ...
|     |
|     |--- reusable                              # Reusable vue-components
|
|--- helpers                                     # helper functions and core constants
|--- pages                                       # root components (auto routed by NuxtJS)
|--- static
|--- store                                       # Nuxt Vuex store for state management
|     |--- modules
|     |     |--- mode
|     |     |--- count
|     |     |--- datatable
|     |     |--- chart
|     |     |--- overtime
|     |...
...
```

#### App Contents
#### `Info Cards`
![](/documentation/counts_component.png)
#### `Covid Overtime Map`
![](/documentation/overtime.png)
#### `DataTable`
![](/documentation/datatable.png)
#### `Charts`
![](/documentation/charts.png)

#### What's going on here
#### `Info Cards`
 - Global covid-19 information of today is coming from `https://disease.sh/v3/covid-19/all` api and of yesterday from `https://disease.sh/v3/covid-19/all?yesterday=1`
#### `Covid Overtime Map`
 - Country **locations** are available in `https://disease.sh/v3/covid-19/countries` api. **Name, latitude** and **longitude** are mapped for all the countries.
 - **244 locations** each having **cases, deaths** and **recoveries** of 700+ dates *(Jan 22, 2020 - yesterday)* are available in `https://disease.sh/v3/covid-19/historical?lastdays=all` api.
 - Those are mapped to an array of objects of **name, location, cases, deaths** and **recoveries.**
 - According to range slider input, **cases, deaths** and **recoveries** of specific date are shown on **OpenStreetMap** instantly.
#### `Datatable`
 - Today's data of all countries are coming from `https://disease.sh/v3/covid-19/countries` api and of yesterday from `https://disease.sh/v3/covid-19/countries?yesterday=1`
#### `Charts`
 - Global data of **cases, deaths** and **recoveries** of all times are coming from `https://disease.sh/v3/covid-19/historical/all?lastdays=all` api.
 - If any country is selected, `https://disease.sh/v3/covid-19/historical/{COUNTRY_NAME}?lastdays=all` api is called to get data for that specific country.
