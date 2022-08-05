# TopApp

Code Challenge project 

## Features 

### Functional

- Authentication (Login/register)
- Users page 
- Account page
- CRUD Ops on all users
### None Functional
- Automatic reauthentication
- secure app routes
- Robust  

## Tools
- React 
- Redux toolkit 
- RTK Query 
- Bootstrap 

## Using the app 
The app is found here : https://top-app-sand.vercel.app/ 
 #### Login
 Credentials
 ```
 email: janet.weaver@reqres.in
 password: hello123!.

 ```
 #### Register
 NOTE: Only predefined users at : https://reqres.in/ can be created.
 Your details are saved and retrieved from localstorage for testing purposes.
 Example default details:
 ```
 email: janet.weaver@reqres.in
 password: <<password of choice>>

 ```

## Tradeoffs
The provided backend API (placeholder api) has these limitations:
- Does not provide users details on login
- Does not provide refresh and access token 
- New users cannot be created only predefined by API author

Hence the app is API agnostic the placeholder API can be swapped out with working API. 