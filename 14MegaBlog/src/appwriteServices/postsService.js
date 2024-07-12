import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class PostsService {
    client= new Client();
    databases;
    bucket;
    
    constructor() {
        this.client
        .setEndpoint(config.appwriteEndpoint)
        .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    //related to databases
    async createPost({title,slug,content,image,userId,status}) {      //we are taking slug just to add as the ID( we are not using ID.unique() here)
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,  //as document id
                {
                    title,
                    content,
                    image,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title,content,image,status}) {              //image will have the id of the image which we'll get from the uploadFile method
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    content,
                    title,
                    image,
                    status
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    async getPosts() {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                [
                    Query.equal("status","active"),   // so we get only those posts having status = active  (we are able to use status in queries because it has been added in the indexes)
                ]
            )
        } catch (error) {
            throw error;
        }
    }

    //related to bucket(storage(files))
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            throw error;
        }
    }

    async getFilePreview(fileId) {     //this is so fast that it doesnt even need async await
        try {
            return this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            throw error;
        }
    }
}

const postsService = new PostsService()
export default postsService;