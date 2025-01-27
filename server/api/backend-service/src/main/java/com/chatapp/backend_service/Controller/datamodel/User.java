package com.chatapp.backend_service.Controller.datamodel;
public class User{

    private String userName;
    private Integer userID;
    private boolean canCall;
    private String sessionKey;


    public User(Integer id, String username, String key){
        this.userName = username;
        this.userID = id;
        this.canCall = true;
        this.sessionKey = key;
    }

    String getSessionKey(){
        return this.sessionKey;
    }

    Integer getuserID(){
        return this.userID;
    }

    String getName(){
        return this.userName;
    }

    Boolean canContact(){
        return this.canCall;
    }

   
    public String toString(){
        return("UserID: " + Integer.toString(userID) + "Username: " + userName + 
        "Contactable: " + canCall);
    }



}