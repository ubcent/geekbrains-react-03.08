import React, {Component} from 'react';

import {Jumbotron,Button,Media } from 'reactstrap';

export default class Content extends Component {
    render() {
        return(
            <Jumbotron>
                <h1 className="display-6">«ОНА»: как мы придумали образы искусственного интеллекта</h1>
                <p className="lead">как интернет-конкурс фотографии вырос в полноценную оффлайн-выставку</p>
                <hr className="my-2" />
                <p className="text-muted">Почти у каждого современного человека сегодня в кармане смартфон, поэтому, если говорить про искусственный интеллект,
                    то чаще всего пользователи сталкиваются в своей частной жизни с голосовым помощником. Помимо выполнения основной функции,
                    помощи пользователям, условные Siri или Алиса научились шутить, петь, рассказывать сказки, анекдоты и даже спорить. В основном,
                    они говорят приятными женскими голосами. Так мы определись с образом, а позже, и с названием выставки.</p>
                <Media left>
                    <Media object src="1.jpg" alt="Не поняла как подключить сюда картинку" />
                </Media>
                <br/>
                <p className="lead">
                    <Button color="info">Learn More</Button>
                </p>
            </Jumbotron>
        )
    }
}