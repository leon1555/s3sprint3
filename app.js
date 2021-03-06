const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const nunjucks = require('nunjucks')
const indexRouter = require('./routes/routers')
// const usersRouter = require('./routes/users')

const dbMongo = require('./dbMongo')
// const dbPostgres = require('./dbPostgres')
const app = express()

// view engine setup
// nunjucks.configure('views', {
//   autoescape: true,
//   express: app
// })
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter);
// app.get('/', splashRouter);
// app.use('/search', searchRouter);
// app.use('/query', queryRouter);
// app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// app.post('/search', searchRouter);
// app.use('/home', queryRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
