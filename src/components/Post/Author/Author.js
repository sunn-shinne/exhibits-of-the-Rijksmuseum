import React from 'react'
import classes from './Author.module.css'
import museum from './museum.png'
import anonymous from './anonymous.png'

const Author = props => {
    // выбераем какую аватарку отобразить
    const chooseAvatar = name =>  {
        if (name === 'anonymous') {
            return anonymous
        } else {
            return museum
        }
    }

    // Из массива формируем строку местоположения
    const getPlace = arr => {
        if (arr.length === 0) {
            return null
        } else 
        if (arr.length === 1) {
            return arr[1]
        } else
        if ((arr.length === 2) && ((arr[0].indexOf(arr[1]) >= 0) || (arr[1].indexOf(arr[0]) >= 0))) {
            return arr[1]
        } else 
        if (arr.length === 2) {
            return arr.join(', ')
        }
    }
    
    return (
        <div className={classes.Author}>
            <span>
                <img src={chooseAvatar(props.authorName)} alt=""></img>
                <p>
                    <strong>{props.authorName}</strong><br />
                    {getPlace(props.place)}
                </p>
            </span>
            <small>by{props.year}</small>
        </div>
    )
}

export default Author