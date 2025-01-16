import React from "react";

export type TItem = {
    id: string;
    text: string;
};


interface MyListProps {
    header: string;
    items: TItem[];
}


const MyList: React.FC<MyListProps> = ({header,items}) => {

    return (
        
        <div>
        <h1>{header}</h1>
        <ol>
            {items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ol>
    </div>
    )
};

export default MyList;