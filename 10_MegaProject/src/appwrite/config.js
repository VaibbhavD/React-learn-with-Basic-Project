import conf from "../conf/conf";
import {Client,ID,Databases,Query,Storage} from 'appwrite'

export class Service{
    client=new Client()
    databese;
    storage;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)  
        .setProject(conf.appwriteProjectId);      
        
        this.databese=new Databases(this.client)
        this.storage=new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
                return await this.databese.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId
                    }
                    )
        } 
        catch (error) {
            console.log("createPost ::"+error)
        }

    }

    async updatePost(slug,{title,content,featuredImage,status,userId}){
        try {
            return await this.databese.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }
         catch (error) {
            console.log("updatePost ::"+error)
        }
    }

    async deletePost(slug){
        try {
             await this.databese.deleteDocument(
                conf.appwriteDatabaseId,
                cong.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("deletePost ::"+error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databese.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } 
        catch (error) {
            console.log("getPost::"+error)
        }

    }

    async getPosts(quaries=[Query.equal("status","active")]){
        try {
            return await this.databese.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                quaries
            )
        } 
        catch (error) {
            console.log("getPosts::"+error)
        }
    }

    // file upload Services

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } 
        catch (error) {
            console.log("uploadFile::"+error)
        }
    }

    async deleteFile(fileId){
        try {
             await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } 
        catch (error) {
            console.log("deleteFile::"+error)
            return false;
        }
    }

     getFilepreview(fileId){
       
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )

    } 


    }



const service=new Service()
export default service