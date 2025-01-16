import React from "react";

export type TItem = {
    id: string;
    text: string;
    clicked: boolean;
};


interface MyListProps {
    header: string;
    items: TItem[];
    updateClickedItem?: (id: string) => void;
}


const MyList: React.FC<MyListProps> = ({header, items, updateClickedItem}) => {

    return (
        <div>
            <h1>{header}</h1>
        <ol>
            {items.map((item) => (

                <li key={item.id} 
                    onClick={() => updateClickedItem && updateClickedItem(item.id)}
                    className={item.clicked ? "clicked-item" : ""}
                >
                    {item.text}
                </li>
            ))}
        </ol>
        </div>
        
    );
};

export default MyList;