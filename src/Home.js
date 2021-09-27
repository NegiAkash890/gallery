import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Card from './components/Card'


function Home() {
    const collections  = useSelector( state => state.collections.collections)
    return (
        <div className='home'>
            { collections.map(
                collection =>{
                return <Card name={collection.name} description={collection.description} key={collection.id} id= {collection.id} images={collection.images}/>
                })
            }
        </div>
    )
}

export default Home
