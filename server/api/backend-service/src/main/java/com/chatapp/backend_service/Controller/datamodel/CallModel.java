package com.chatapp.backend_service.Controller.datamodel;
import java.util.ArrayList;

public class CallModel {

    User host;
    private static Integer idcounter = 1;
    Integer callID;
    ArrayList<User> callMembers;
    Boolean isInviteOnly;
    String callLink;
    String scheduledTime;
    String callLength;
    

    CallModel(User callhost, String link){
        host = callhost;
        setInviteFalse();
        callLink = link;
        callID = idcounter++;
    }

    CallModel(User callhost, String link,  ArrayList<User>members){
        host = callhost;
        callMembers = members;
        setInviteTrue();
        callLink = link;
        callID = idcounter++;
    }

    CallModel(User callhost, String link, ArrayList<User> members, String startdate){
        host = callhost;
        callMembers = members;
        setInviteTrue();
        scheduledTime = startdate;
        callID = idcounter++;
    }

    public int getCallSize(){
        return callMembers.size();
    }

    public boolean addCallMember(User newusr){
        try{
            callMembers.add(newusr);
        }
        catch(Exception e){
            System.out.println(e);
            return false;
        }
        return true;
    }

    public boolean removeCallMember(User usr){
        try{
            callMembers.remove(callMembers.indexOf(usr));
        }
        catch(Exception e){
            System.out.println(e);
            return false;
        }
        return true;   
    }

    public void setInviteTrue(){
        isInviteOnly = true;
    }

    public void setInviteFalse(){
        isInviteOnly = false;
    }

    void setCallHost(User usr){
        host = usr;
    }

    Integer getcallID(){
        return callID;
    }

    public String toString(){
        StringBuilder sb = new StringBuilder();
        sb.append("host: " + this.host + "\nCall members: " + this.callMembers);

        return(sb.toString());
    }
    

    
    
}
