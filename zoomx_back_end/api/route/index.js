module.exports = app => {
    let todoList = require('../controller/TaskController');
    app.route('/')
        .get(todoList.get_list)
        .post(todoList.add_list)
}