import axios from 'axios';

//set the all images details in reducer
export const setImages = (image) => {
    return { type: 'SET_IMAGES', payload: image }
}

//Getting all the images details 
export const imagesList = () => {
    return (dispatch) =>
        axios.get(`https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json`)
            .then((response) => {
                const image = response.data
                dispatch(setImages(image))
            })
}
