function manejoEstados(state, action) {
    switch (action.type){
        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                darkMode:action.darkMode,
            };
        case "UPDATE_PLAYBACK":{
            return {
                ...state,
                currentSound:action.currentSound,
            };
        }
        default:
            return state;
    }
}