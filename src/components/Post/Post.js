import React from 'react'
import classes from './Post.module.css'
import Author from './Author/Author'
import Description from './Description/Description'

const Post = props => {

    // Берем год создания с конца описания
    const getYear = str => {
        const size = str.length
        if (str[size-4] === ' ') {
            return str.substr(size-3, 3)
        } else {
            return str.substr(size-4, 4)
        }
    } 

    // В зависимости от разрешения экрана возвращаем разную разметку
    if (window.screen.availWidth > 992 ) {
        return (
            <div className={classes.Post}>
                <Author 
                authorName={props.authorName}
                place = {props.place}
                year={getYear(props.description)}
                />

                <img className={classes.Photo} src={props.imgUrl}  alt='' onClick={() => (window.open(props.link))}></img>
                
                <Description 
                description={props.description}
                id = {props.id}
                />
            </div>
        )
    }   else {
        return (
            <div className={classes.Post}>
                <img className={classes.Photo} src={props.imgUrl}  alt='' onClick={() => (window.open(props.link))}></img>
                <div className={classes.Info}>
                    <Author 
                    authorName={props.authorName}
                    place = {props.place}
                    year={getYear(props.description)}
                    />
                    <hr color={'#EBE5E5'} size={'1'} width={'95%'} noshade={'true'}/>
                    <Description 
                    description={props.description}
                    id = {props.id}
                    />
                </div>
            </div>
        )
    }
}

export default Post