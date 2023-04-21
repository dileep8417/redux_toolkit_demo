const rtk = require('@reduxjs/toolkit');
const studentActions = require('../student/studentSlice').actions;

const teacherState = {
    names: [],
    studentsInClass: 0
}

const teacherSlice = rtk.createSlice({
    name: 'teachers',
    initialState: teacherState,
    reducers: {
        addteacherName: (state, action) => {
            state.names.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(studentActions.addStudentName, state => {
            state.studentsInClass++;
        });
        builder.addCase(studentActions.removeStudent, state => {
            state.studentsInClass--;
        });
    }
});

module.exports = {
    reducer: teacherSlice.reducer,
    actions: teacherSlice.actions
}