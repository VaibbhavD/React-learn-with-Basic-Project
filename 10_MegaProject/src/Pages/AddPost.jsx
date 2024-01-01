import React from "react";
import {Container,PostForm} from '../Components/index'

function AddPost(params) {
    
    return(
        <div className="py-8">
            <Container>
            <PostForm/>
        </Container>
        </div>
        
    )
}

export default AddPost