import React from 'react';


import MyList , {TItem} from './MyList';
import { useState } from 'react';

type MyContainerProps = {

}

const MyContainer: React.FC<MyContainerProps> = () => {
    const header = "List Header";
    const [items, setItems] = useState<TItem[]> ([
        { id: "1", text: "First item" },
        { id: "2", text: "Second item" },
        { id: "3", text: "Third item" }
    ]);

    const [newItemText, setNewItemText] = useState<string>("");

    const handleAddItem = () => {
        const newItem: TItem = {
            id: (items.length + 1).toString(),
            text: newItemText
        };
        setItems([...items, newItem]);
  
    }


    return ( 
      <div>
        <MyList header={header} items={items}/>
        <textarea 
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>   
      
  );
}

export default MyContainer;