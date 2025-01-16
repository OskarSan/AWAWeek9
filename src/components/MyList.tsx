import React from "react";

export type TItem = {
    id: string;
    text: string;
};


interface MyListProps {
    header: string;
    items: TItem[];
}


const MyList: React.FC<MyListProps> = ({items}) => {

    return (
        
   
        <ol>
            {items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ol>
    );
};

export default MyList;