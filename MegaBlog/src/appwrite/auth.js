import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";
//FOR GOOD AND IMPROVED CODE DO NOT COPY THE CODE DIRECTLY FROM THE APPWRITE RATHER TRY TH FOLLOWING QUALITY CODE 
export class AuthService{
    client=new Client();
    account;
    constructor(){
        //https://cloud.appwrite.io/v1
        // 65b0e3c4a94415ac5d7f
        // 65b0e3c4a94415ac5d7f
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('65b0e3c4a94415ac5d7f');
            this.account=new Account(this.client);
    }
    
    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //call another method
                return this.login(email,password);
            }
            else {
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailSession(email,password);
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }
    
    async logout(){
        try{
            await this.account.deleteSessions();
        }catch(error){
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;