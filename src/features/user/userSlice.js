const rtk = require('@reduxjs/toolkit');
const axios = require('axios');

const initialState = {
    users: [],
    isLoading: false,
    error: ''
}

const fetchUsers = rtk.createAsyncThunk('users/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data.map(user => user.id))
});

const userSlice = rtk.createSlice({
    name: 'users',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

module.exports = {
    reducer: userSlice.reducer,
    fetchUsers: fetchUsers
}