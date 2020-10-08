import React from 'react'
import classes from './Content.module.css'
import axios from 'axios'
import Post from '../../components/Post/Post'

class Content extends React.Component {
    state = {
        posts:[],
        apiKey: 'pW7Grfpx',
        url: `https://www.rijksmuseum.nl/api/en/collection?key=pW7Grfpx&involverb=ListRecords&set=collectie_online&p=3&ps=100&f.dating.period=&format=json`,
        screenSize: window.screen.availWidth,
    }

    componentDidMount() {
        // Получение данных
        axios.get(this.state.url)
        .then(response => {
        const posts= response.data.artObjects
        this.setState({posts: posts})
        })
        // Добавление слушателя на измнение размера экрана 
        window.addEventListener('resize', this.changeScreenSize.bind(this))
    }

    // Проверяем надо ли запустить рендер, для изменения разметки или нет (и запускаем по надобности, изменив state)
    changeScreenSize() {
        this.setState((state) => {
            if (state.screenSize < 992 && window.screen.availWidth >= 992) {
                return {screenSize: window.screen.availWidth}
            } else 
            if (state.screenSize >= 992 && window.screen.availWidth < 992) {
                return {screenSize: window.screen.availWidth}
            }
        })
    }

    // Проверка длинны имени автора
    checkNameSize(name) {
        if (name.length >  25) return false
        else return true
    }
    // Проверка размера фотографии произведения
    checkPhotoSize(width, height) {
        if (width / height > 1.8) {
            return false
        } else 
        if ((height / width > 1.3)){
            return false
        } else return true
    }

    render() {
        return (
        <div className={classes.Content}>
            {this.state.posts.map((post, index) => {
                // Проверка объекта (что бы не отображать элементы с слишком непропорциональными картинками или слишком длинными именами автора)
                if (post.hasImage && this.checkNameSize(post.principalOrFirstMaker) 
                    && this.checkPhotoSize(post.webImage.width, post.webImage.height)) {
                // отображаем элемент
                    return (
                        <Post 
                        key = {index}

                        authorName = {post.principalOrFirstMaker}
                        place = {post.productionPlaces}

                        imgUrl = {post.webImage.url}
                        link = {post.links.web}

                        id = {post.id}
                        description = {post.longTitle}
                        />)
                    } else {
                    // не отображаем элемент
                        return (null)
                    }
            })}
        </div>
        )
    }
}


export default Content