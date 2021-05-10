import React from 'react';
import listSvg from './assets/img/list.svg'
import List from "./components/List";

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
                <List items={[
                    {
                        className: "list__add-button",
                        icon: (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>)
                        ,
                        name: 'Добавить список',
                    }
                ]}
                />
            </div>
        </div>
    );
}

export default App;
