import React from 'react';
import { List } from 'react-virtualized';

const list = [1, 4, 6, 7, 6, 4, 3, 0, 6, 4, 3, 3, 6, 43, 55, 32, 6, 24, 6, 54, 7, 43, 67, 8,
    44, 76, 87, 33, 56, 77, 24, 68, 57, 12, 85, 93, 58]


function rowRenderer({ index, key, style }) {
    return (
        <div key={key} style={style}>
            {list[index]}
        </div>
    );
}

function Listvirtualize() {
    return (
        <div>
            <List
                width={300}
                height={300}
                rowCount={list.length}
                rowHeight={30}
                rowRenderer={rowRenderer}
            />
        </div>
    );
}

export default Listvirtualize;