const store = require('./src/app/store');
const studentActions = require('./src/features/student/studentSlice').actions;
const teacherActions = require('./src/features/teacher/teacherSlice').actions;
const fetchUsersAsyncAction = require('./src/features/user/userSlice').fetchUsers;

const unsubscribe =  store.subscribe(() => console.log(store.getState()));

store.dispatch(studentActions.addStudentName('Dileep'));
store.dispatch(studentActions.addStudentName('Ram'));
store.dispatch(studentActions.removeStudent('Ram'));

store.dispatch(teacherActions.addteacherName('Rajesh'));

store.dispatch(fetchUsersAsyncAction())

unsubscribe();