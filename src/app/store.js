const rtk = require('@reduxjs/toolkit');
const loggerMiddleware = require('redux-logger').createLogger();
const studentReducer = require('../features/student/studentSlice').reducer;
const teacherReducer = require('../features/teacher/teacherSlice').reducer;
const userReducer = require('../features/user/userSlice').reducer;

const store = rtk.configureStore({
    reducer: {
        student: studentReducer,
        teacher: teacherReducer,
        users: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware) 
});

module.exports = store;