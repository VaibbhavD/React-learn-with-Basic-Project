import {Container,PostCard} from '../Components/index'
import React, { useState,useEffect } from 'react'
import Service from '../appwrite/config'
import './Home.css'

function Allposts(){

    const[posts,setposts]=useState([])

    useEffect(()=>{
        Service.getPosts([]).then((posts)=>{
        if (posts)
        setposts(posts.documents)
    
    })},[])

    if (posts.length === 0) {
        return (
            <div class="lds-ring "><div></div><div></div><div></div><div></div></div>
        )}

    return(
        <div className="w-full py-8">
            <Container>
              <div className="flex flex-wrap">
              {posts.map((post)=>(
                   <div className="p-2 w-1/4" key={post.$id}>
                    <PostCard {...post}/>
                   </div>
              ))}
              </div>
            </Container>
        </div>
    )
}
export default Allposts