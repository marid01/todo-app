import React from 'react';
import listSvg from './assets/img/list.svg'
import List from "./components/List";
import AddListButton from "./components/AddButtonList";

function App() {
    return (
        <div className="todo">
            <div className="todo__sidebar">
                <List items={[
                    {
                        icon: <img src={listSvg} alt=""/>,
                        name: 'Все задачи',
                        active: true
                    }
                ]}
                />
                <List items={[
                    {
                        color: 'green',
                        name: 'Покупки',
                    },
                    {
                        color: 'blue',
                        name: 'Фронтенд',
                    },
                    {
                        color: 'pink',
                        name: 'Фильмы и сериалы',
                    }
                ]}
                />
                <AddListButton/>

            </div>
        </div>
    );
}

export default App;
