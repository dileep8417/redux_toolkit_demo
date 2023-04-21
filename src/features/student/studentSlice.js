const rtk = require('@reduxjs/toolkit');

const studentState = {
    names: []
}

const studentSlice = rtk.createSlice({
    name: 'students',
    initialState: studentState,
    reducers: {
        'addStudentName': (state, action) => {
            state.names.push(action.payload);
        },
        'removeStudent': (state, action) => {
            state.names = state.names.filter(name => name !== action.payload);
        }
    }
});

module.exports = {
    reducer: studentSlice.reducer,
    actions: studentSlice.actions
}