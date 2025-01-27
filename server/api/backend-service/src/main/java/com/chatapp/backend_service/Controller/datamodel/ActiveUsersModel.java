package com.chatapp.backend_service.Controller.datamodel;
import java.util.HashMap;
import java.util.Map;

public class ActiveUsersModel extends AppDataModel{

    Map<Integer, User> userList;

    public ActiveUsersModel(){
        userList = new HashMap<>();
    }

    public int getActiveUserCount(){
        return userList.size();
    }

    public boolean addOnlineUser(User usr){
        try{
            userList.put(usr.getuserID(), usr);
            return true;
        }
        catch(Exception e){
            System.out.println(e);
            return false;  
        }    
    }

    public boolean removeOnlineUser(User usr){
        try{
            userList.remove(usr.getuserID());
            return true;
        }
        catch(Exception e){
            System.out.println(e);
            return false;  
        }
    }

    public boolean isUserOnline(User usr){
        return userList.containsKey(usr.getuserID());
    }

    public User createUser(Integer uID, String username, String key){
        return new User(uID, username, key);//We generate a sessionString in middleware
    }

    public String toString(){
        StringBuilder sb = new StringBuilder();
        sb.append("_______________________________________________\n");
        userList.forEach((key,value)->{
            sb.append(value.toString() + "\n");
        });
        sb.append("\n_______________________________________________");
        return(sb.toString());
    }





    
}
