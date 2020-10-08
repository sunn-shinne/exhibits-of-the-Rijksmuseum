import React from 'react'
import classes from './Description.module.css'
import like from './like.png'

const Description = props => {

    // В полученных данных из музея нет колличества лайков, так что сгенерируем рандомное число
    const randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return String(Math.floor(rand)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
    }

    return (
        <div className={classes.Description}>
            <span className={classes.likes}>
                <img src={like} width={'14px'} height={'14px'} alt="🤍" onClick={() => alert('ID: ' + props.id)}></img>
                <p>{randomInteger(10, 2000)}</p>
            </span>   
            <p>{props.description}</p>
        </div>
    )
}

export default Description