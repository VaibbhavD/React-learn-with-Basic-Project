import React,{ useState,useEffect } from "react";
import {Container,PostCard} from "../Components/index"
import Service from "../appwrite/config";
import './Home.css'

function Home() {

    const[posts,setpost]=useState([])

    useEffect(()=>{
        Service.getPosts().then((posts)=>{
            if(posts)
            {
            setpost(posts.documents)
            }
        })},[])
    

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap ">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500 ">
                                Login to read posts
                            </h1>
                            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }else{
        return (
            <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div className='p-2 w-1/4' key={post.$id}>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
        )
    }
}
export default Home