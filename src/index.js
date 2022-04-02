const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const session = require('express-session');
const methodOverride = require ('method-override');
const flash = require('connect-flash');
const passport = require('passport');
const morgan = require('morgan');
const MongoStore = require('connect-mongo');

const http = require('http');
const socketIO = require('socket.io');

const create = require('./libs/createUser');
const indexRoutes = require ('./routes/index');
const userRoutes = require ('./routes/users');
const mapsRoutes = require ('./routes/maps');
require('./config/passport');

const app = express();
require('./database');
const server = http.Server(app);
const io = socketIO(server);
create.createAdminUser();

// Settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(session({
  secret: 'mysecretsession',
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl:'mongodb+srv://gds05:gds05@cluster0.enacp.mongodb.net/maps?retryWrites=true&w=majority'}),//mongodb+srv://gds05:gds05@cluster0.enacp.mongodb.net/maps?retryWrites=true&w=majority
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});
//Routes
app.use(indexRoutes);
app.use(userRoutes);
app.use(mapsRoutes);
// sockets
require('./sockets')(io);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.render("404");
});



// Starting the server
server.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});



