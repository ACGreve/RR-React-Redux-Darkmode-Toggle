import { createSlice } from '@reduxjs/toolkit'

const mode1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'https://preview.redd.it/kaladin-stormblessed-v0-uqivu1h5pjqa1.png?width=640&crop=smart&auto=webp&s=d4c0e44d54e566b69457aa935b2bc546d3b43799'
}

const mode2 = {
    darkMode: false,
    color1: '#6E44FF',
    color2: '#B892FF',
    color3: '#FFC2E2',
    color4: '#FF90B3',
    color5: '#EF7A85',
    photo: 'https://i.pinimg.com/originals/33/06/83/3306830f57505e1502cd081ec6c21f8e.png'
}

//inital value on startup (light mode)
const initialState = mode2

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        //switches to mode1 (dark mode)
        toggleDark: (state) => {
            return mode1
        },
        //retoggle lightmode 
        toggleLight: (state) => {
            return mode2
        }
    }
})

//exports the 2 actions to be stored into modeSlice as actions
export const {toggleDark, toggleLight} = modeSlice.actions

//inital reducer state?
export default modeSlice.reducer