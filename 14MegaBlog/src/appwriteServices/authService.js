import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;               //we need account because all the query methods isi pe lgte hain account.___  and for account we need client 

    constructor() {       //because we want to create account and client only when an object is created
        this.client
        .setEndpoint(config.appwriteEndpoint)
        .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email,name,password}) {
        try 
        {
            const userAccount = await this.account.create(ID.unique(),email,name,password);
            if(userAccount) 
            {
                /*redirect to login if account created successfully*/
                return this.login({email,password});
            }
            else 
            {
                return userAccount;
            }
        } 
        catch (error) 
        {
            throw error;
        }
    }

    async login({email,password}) {     //will return a session not the doc remember
        try 
        {
            return await this.account.createEmailPasswordSession(email,password);
        } 
        catch (error) 
        {
            throw error;
        }
    }

    async logout() {
        try 
        {
            return await this.account.deleteSessions();  //will delete all the sessions from every browser but : deleteSession("sessionid") to delete a specific session
        } 
        catch (error) 
        {
            throw error;
        }
    }

    async getCurrentUser() {            //this will gvie the actual dsta of the user not the login method
        try 
        {
            return await this.account.get();
        } 
        catch (error) 
        {
            throw error;
        }
    }
}

const authService = new AuthService();           //object creation 

export default authService;


//remember thse are like interactions with the db so use async/await (becuase they return promises as they are async methods) and try/catch 