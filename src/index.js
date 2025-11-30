const express = require('express')
const morgan = require('morgan')
const path = require('path');
const { engine } = require('express-handlebars');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
    extname: '.hbs'   // đăng kí template engine, khai báo để express có thể hiểu đuôi handlebars
}));
app.set('view engine', 'hbs'); // Chọn loại file view mặc định (handlebars) 
app.set('views', path.join(__dirname, 'resources/views')); // Chỉ thư mục chứa view

// route
app.get('/', (req, res) => {
    return res.render('home'); // render file home.handlebars thành HTML
})

app.get('/news', (req, res) => {
    return res.render('news');
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
