import conf from "../conf/conf";
import { Client, ID ,Databases, Storage, Query  } from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
            this.databases=new Databases(this.client)
            this.bucket=new Storage(this.client);
    }

    async createPost({Title,slug,content,featuredimage,status,userid}){
        try{
            //IN THE PLACE OF ID.UNIQUE() WE ARE USING SLUG (I.E, SLUG IS UNIQUE HERE)...
            return await this.databases.createDocument(conf.appWriteDatabaseId,conf.appWriteCollectionId,slug,
                {
                    Title,
                    content,
                    featuredimage,
                    status,
                    userid,
                }
            )
        }catch(error){
            console.log("Appwrite service :: createpost :: error",error);
        }
    }
    
    async updatePost(slug, {Title,content,featuredimage,status}){
        try {
            return await this.databases.updateDocument(conf.appWriteDatabaseId,conf.appWriteCollectionId,slug,
                    {
                        Title,
                        content,
                        featuredimage,
                        status,
                    }
                )
        } catch (error) {
            console.log("Appwrite service :: updatepost :: error",error);
        }
    }
    
    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(conf.appWriteDatabaseId,conf.appWriteCollectionId,slug);
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletepost :: error",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appWriteDatabaseId,conf.appWriteCollectionId,slug);
        } catch (error) {
            console.log("Appwrite service :: getpost :: error",error);
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(conf.appWriteDatabaseId,conf.appWriteCollectionId,queries);
        } catch (error) {
            console.log("Appwrite service :: getposts :: error",error);
            return false;
        }
    }

   
    //FILE UPLOAD SERVICES
    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appWriteBucketId,ID.unique(),file)
        } catch (error) {
            console.log("Appwrite service :: uploadfile :: error",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.deleteFile(conf.appWriteBucketId,fileId)
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletefile :: error",error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appWriteBucketId,fileId);

    }
}

const service=new Service();

export default service;