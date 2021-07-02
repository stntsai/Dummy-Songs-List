import {combineReducers} from 'redux';

const songsReducer =()=>{
    return [
        {title: 'Hello World',duration: '5:01'},
        {title: 'Never Mind',duration: '4:48'},
        {title: 'Just Like That',duration: '4:56'},
        {title: 'Come Here',duration: '3:59'}
    ]
}

const selectedSongReducer = (selectedSong = null,action)=>{
    if (action.type ==='SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})