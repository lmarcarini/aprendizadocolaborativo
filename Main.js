import React from 'react'
import './App.css';
import Banner from './Banner/Banner';
import DisciplinasList from './DisciplinasList/DisciplinasList'

export default function Main() {
    return (
        <div>
            <Banner/>
            <DisciplinasList/>
        </div>
        
    )
}