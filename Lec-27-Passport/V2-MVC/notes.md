## Passport JS

# Why Passport JS?
- it is a package that helps in authentication
- it is a middleware
- it helps in implementing different strategies for authentication
- helps to login using google, facebook, github etc
- it is very easy to implement
- like local strategy, google strategy, facebook strategy etc.

# How to use Passport JS?
- install passport using npm
- `npm i passport`
- install passport-local for local strategy
- `npm i passport-local`

- now we have to configure passport in our app.js file
- require passport and passport-local
- configure passport using `passport.use()`
- post requests will be handled by passport
- password will handle the code logic for us

- to verify user in database we serialize and deserialize user
- serialize user will save the user id in session
    user ------> |serializeUser| ------> id

- deserialize user will fetch the user from database using id stored in session
    id ------> |deserializeUser| ------> user

