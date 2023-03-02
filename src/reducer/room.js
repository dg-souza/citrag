import { createSlice } from "@reduxjs/toolkit";

const roomSlicer = createSlice({
    name: 'room',
    initialState: {
        idRoom: '',
        usersInfo: [],
        idUser: 0,
        nick: ''
    },
    reducers: {
        createRoom(state, action) {
            const newRoom = action.payload

            state.idRoom = newRoom.idRoom
            state.usersInfo = newRoom.usersInfo
            state.idUser = newRoom.idUser
            state.nick = newRoom.nick
        }
    }
})

export const roomActions = roomSlicer.actions

export default roomSlicer