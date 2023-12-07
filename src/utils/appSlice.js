import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: 'app',
    initialState: {
      isMenuOpen: true,
    },
    reducers: {
      toggleMenu: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes.
        // Also, no return statement is required from these functions.
        state.isMenuOpen = !state.isMenuOpen;
      },
      closeMenu: (state) => {
        state.isMenuOpen = false;
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {toggleMenu, closeMenu} = appSlice.actions
  export default appSlice.reducer;