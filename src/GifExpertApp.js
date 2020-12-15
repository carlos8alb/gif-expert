import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Superman']);
    // }

    return ( 
        <>
        <h2> Gif Expert App </h2>
        <AddCategory />
        <hr/>

        <ol>
            {
                categories.map( ( item, i ) => {
                    return <li key={ item }> { item } </li>
                })
            }
        </ol>
        </>
    )
}