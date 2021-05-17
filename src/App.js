import React, {useState} from 'react';
import listSvg from './assets/img/list.svg'
import List from "./components/List/List";
import AddButtonList from "./components/AddList/AddButtonList";

import DB from './assets/db.json';
import Tasks from "./components/Tasks/Tasks";


function App() {
    const [lists, setLists] = useState(DB.lists.map(item => {
        item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
        return item;
    }));

    const onAddList = obj => {
        const newList = [...lists, obj];
        setLists(newList);
    }

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
                <List items={lists} onRemove={() => {alert(1)}} isRemovable/>
                <AddButtonList onAdd={onAddList} colors={DB.colors}/>
            </div>
            <div className="todo__tasks">
                <Tasks/>
            </div>
        </div>
    );
}

export default App;
