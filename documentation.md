Background

A company called Autoura looks at delivering vehicle based, brandable, in-destination travel experiences and they have already 
collected a lot of information about different things to do and places to go around the world. This includes different places 
to eat, places that might be of interest, places to stay and different tours to go on and more. Autoura created an API that 
can be connected to, given the right authorisation and API key, which allowed access to some of this destination information. 
Each destination or thing to do was called a stop which contained a stop ID, a stop type and a stop class. There were six main 
stop types which were food, accommodation, points of interest, attractions, events and tours and they all included more information 
like description, location, dates, images, accessibility etc. However, the problem with this though was that the API would just 
return raw JSON data so being displayed like this can be confusing and not much use to anyone.Therefore, the problem that needed 
solving, as a developer, was to connect to the API and interpret the data by accessing the certain aspects of the information 
like the location, stop type etc, and then to display it within a multi-page web application and designing it around the specific 
data chosen to work with. The solution that I decided to come up with was to access all the stop types that were all then accessible 
by the vehicle type of a motorbike meaning a web application could be created around all the destinations and different things to 
do that Autoura had information on that all motorbike and scooter users could travel too.To create the web application vue.js was 
used because it is a very flexible and adaptable library as it is built with the use of components which allows easy reuse and 
injection of the same code into multiple pages which can speed up the development process. GitHub was also used to manage the 
workflow of the project and allowed the easy installation of packages and tools that aided the development of the application.

Methods

As mentioned above, the app was made within GitHub which allowed a project repository to be made that contained all the necessary 
files and allowed the workflow of the project to run smoothly and organised. Commits with messages were made after certain points 
along the development which can be seen by anyone viewing the project repository. This is a great feature because if anyone else 
was working on the project they would be able to know exactly what had been done at each stage of commit or if the project was 
handed over to someone else for further work in the future they would be able to go back and see what has been done previously and 
where to carry on from. The build process of the application was to start with the planning and design of each page for the app 
and then the coding/development would take place and then finally the deployment. Planning was done by firstly using a google 
chrome app called postman to connect to the Autoura API using the appropriate authorisation header and API key to have a look 
at the data and come up with an idea of what aspect of the data to base the web application around. Once I came up with the idea 
to display data for motorbike and scooter users, I could then start designing the wireframes for each page which I did so using 
an online tool called wireframe cc. When the designs were finished the development of the app was then started. This was done by 
creating a development environment in GitHub and installing the necessary tools and technologies and node modules to use to create
the features of the app. The technologies installed were emmet, bootstrap/bootstrap-vue, Axios, and vue2-leaflet.

Emmet – is a language abbreviator which I used for creating HTML elements quicker which decreased build time.

Bootstrap – is a front-end component library used for building responsive web apps which I use for creating a responsive navigation
bar and responsive grid page layouts.

Axios – is vue.js component that is used to consume and display data from APIs using HTTP requests which I used for connecting 
to Autoura’s API and displaying their data.

Vue2-leaflet – is a mapping and location library using leaflet and open source mapping information which I used to display the 
data from the APIs locations on a map. 

These were all used and partnered in making the development of the app simpler and provide great features to make the app 
effective. Finally, when the development was finished the app was pushed to the remote origin repository and then deployed 
using GitHub pages.
