import React from 'react';
import MyList from './MyList';

type MyContainerProps = {

}

const MyContainer: React.FC<MyContainerProps> = () => {
    const header = "List Header";
    const items = [
        { id: "1", text: "First item" },
        { id: "2", text: "Second item" },
        { id: "3", text: "Third item" }
    ];

    return (  
      <MyList header={header} items={items} />
  );
}

export default MyContainer;