import React from 'react';


import MyList , {TItem} from './MyList';
import { useState } from 'react';

type MyContainerProps = {

}

const MyContainer: React.FC<MyContainerProps> = () => {
    const header = "List Header";
    const [items, setItems] = useState<TItem[]> ([
        { id: "1", text: "First item", clicked: false },
        { id: "2", text: "Second item", clicked: false },
        { id: "3", text: "Third item", clicked: false }
    ]);

    const [newItemText, setNewItemText] = useState<string>("");

    const handleAddItem = () => {
        const newItem: TItem = {
            id: (items.length + 1).toString(),
            text: newItemText,
            clicked: false
        };
        setItems([...items, newItem]);
        setNewItemText("");
    };

    const updateClickedItem = (id: string): void => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, clicked: !item.clicked };
            }
            return item;
        });
        setItems(updatedItems);
    }
    return ( 
      <div>
        <MyList header={header} items={items} updateClickedItem={updateClickedItem}/>
        <textarea 
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>   
      
  );
}

export default MyContainer;