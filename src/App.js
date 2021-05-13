import React from 'react';
import listSvg from './assets/img/list.svg'
import List from "./components/List/List";
import AddButtonList from "./components/AddList/AddButtonList";

import DB from './assets/db.json';


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
                <List items={DB.lists.map(item => {
                    console.log(DB.colors.filter(color => color.id === item.colorId))
                    item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
                     // console.log(item)
                    return item;
                })}/>
                <AddButtonList colors={DB.colors}/>
            </div>
        </div>
    );
}

export default App;
