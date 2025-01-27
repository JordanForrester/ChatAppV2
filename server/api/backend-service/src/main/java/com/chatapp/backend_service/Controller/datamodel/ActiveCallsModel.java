package com.chatapp.backend_service.Controller.datamodel;
import java.util.HashMap;
import java.util.Map;

public class ActiveCallsModel{

    Map<Integer, CallModel> callList;

    public ActiveCallsModel(){
        callList = new HashMap<Integer, CallModel>();
    }

    public int getActiveCallCount(){
        return callList.size();
    }

    public void addOnlineCall(CallModel call){
        callList.put(call.getcallID(), call);
    }

    public void removeOnlineCall(CallModel call){
        callList.remove(call.getcallID());
    }

    public boolean isCallActive(CallModel call){
        return callList.containsKey(call.getcallID());
    }

    public CallModel createNewCall(User host){
        return new CallModel(host, null);
    }

    public String toString(){
        StringBuilder sb = new StringBuilder();
        sb.append("_______________________________________________\n");
        callList.forEach((key,value)->{
            sb.append(value.toString() + "\n");
        });
        sb.append("\n_______________________________________________");
        return(sb.toString());
    }





    
}
