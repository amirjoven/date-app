# Exercise 01
Programming Exercise

A web application that displays server date and time.
This also displays the server date and time converted to Philippine Time.

Frontend:
- The frontend is written in Angular JS. The sourcecode is on date-app directory.
- This Angular JS application fetches the server date,time, and timezone from the backend application and displays it.
- The converted date and time to Philippine time is fetched from http://api.timezonedb.com/v2.1/convert-time-zone

Backend:
- The backend is written in Java using SpringBoot. The sourcecode is on rest-service directory.
- The server date information is being served through rest api endpoint in JSON format:
```
    {
        "serverDate":"YYYY-01-06",        
        "serverTime":"HH:mm:ss",
        "serverTimezone":"",
    }
```    
        
