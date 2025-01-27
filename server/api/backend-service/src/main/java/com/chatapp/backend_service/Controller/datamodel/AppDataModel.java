package com.chatapp.backend_service.Controller.datamodel;
/*
 * Data model for calls still needs work
 * User is good for now
 * 
 */


import java.util.ArrayList;
public class AppDataModel {

    ArrayList<ActiveUsersModel> UserModels;
    ArrayList<ActiveCallsModel> CallModels;
    

    public AppDataModel(){
        UserModels = new ArrayList<ActiveUsersModel>();
        
    }

    public ActiveUsersModel getActiveUserModel(){
        return UserModels.get(0);
    }

    public ActiveUsersModel getActiveUserModel(int i){
        return UserModels.get(i);
    }
    
    public int createUserModel(){
        ActiveUsersModel model = new ActiveUsersModel();
        UserModels.add(model);
        return UserModels.indexOf(model);
    }

    public boolean deleteUserModel(int index){
        if(UserModels.get(index) != null){
            UserModels.remove(index);
            return true;
        }
        else{
            return false;
        }
    }

    public boolean createCall(User usr){
        try{

            return true;

        }
        catch(Exception e){
            return false;
        }
        
    }


}
