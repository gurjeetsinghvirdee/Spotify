export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finish developing...
    //token: 
    //    "BQDgJKcRRowN6la-EOBqK97LHxOGE53f4XlIExgAVVZMiT58rRTY-wiVclMKocrMRuQaWyxO6XCIt8-9BJL7n4pjiTfUfTrWGpgvSsv6ivi-7_cLK0IdQv82rZ_oFMEbXrfpfbcD9-oiB-LchbmxdW3uNadYEkeECzQj3S5n8RNklydXY9iq",
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]
    
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };    
        default:
            return state;

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };    

  }
};

export default reducer;