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

Implementation

The first step of the development was to create a home, sign up and log in view and to set up a router in the main.js file that allows
router links to display different views within the app without changing pages. In theory this creates a multi-page one-page application.
After that the first problem that needed to be solved was to implement the sign up and log in feature. This was done by creating a user 
form as a Vue component so that it could then be injected into both pages. The user form consisted of a HTML form for users to enter in
an email and password to create an account. This was handled by setting up a firebase account and connecting to its API by storing the 
API key and information in a config firebase.js file. This was then used to allow users submit the form to firebase where it would store
their information as new users. The user form then contained methods that validated the form fields by using if statements to check that
the user had enter details into all the fields and would prevent the form submitting if they hadn’t and then would display appropriate
error messages. It could then be exported and injected into both sign up and log in views.

-	As user authorisation was stored in the firebase.js file it was used by both pages to redirect the user back to the home page once 
they had logged in. 
-	Views were then set up for each stop type
-	In the food view axios and the API key were imported and then a data function was created to return the API key and the places as an
array.
-	The mounted function would connect to the API with the correct authorization header and get request to display all the food stops.
-	The name, image, location and description would then be displayed as separate cards on the pages with a scroller.
-	The appropriate features of vue2 leaflet were then imported and used alongside the locations of each place to show them as pins on a
map. The map featured geo location by storing the current location of the device and using that as the default view of each map
depending on the level of zoom assigned. 
-	The maps used a mobile atlas tile layout from thunder forest which was used by connecting to their API too.
-	This was then done for the other 5 views displaying data relevant to their stop types

Reflection

Reflecting on this project it was very fun and interesting and challenging to create a multi-page app in Vue.js, consuming third party
data and having the freedom to display it in my own way. The app includes some great features for example the authenticated sign up and
log in forms that alter the styling and view of the site once completed, the cards displaying details of different stop types and the
maps that display pins of the locations of the stops. However, the app is unfortunately incomplete as the API didn’t return information
for some of the stop types which were accommodations, attractions and events so these pages were left without any data display. The code
and correct API connection was put in place though in case Autoura were to update their API with this information. Also a few more
features could have been added to this app to make it more interactive and effective which would be that the pins on the maps could have 
been made clickable and displayed information about them and matching the cards displayed below. Also, a booking button was added to
each result/card but only featured an alert to tell users that bookings were unavailable whereas a real-life booking system could have
been put in place with a booking form that connected to a firebase database to store the information. These are features are something I
would consider implementing if more time was to be spent working on this project in the future.

