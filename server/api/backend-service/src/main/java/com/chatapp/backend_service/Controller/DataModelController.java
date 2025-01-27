package com.chatapp.backend_service.Controller;
import org.apache.tomcat.util.json.JSONFilter;
import org.springframework.web.bind.annotation.*;
import com.chatapp.backend_service.Controller.datamodel.*;
/*
 * Make an api class that tells datamodelcontroller which function to use!
 */


@RestController
public class DataModelController {
	
	private AppDataModel DataModel = new AppDataModel();
	
	@PostMapping("/")
	public boolean hello(@RequestBody final Object requestJSON) {
		
		return handlePostRequest(requestJSON);
	}

	private boolean handlePostRequest(Object g){
		return true;

	}

	@PutMapping("/")//When a new user comes online
	public boolean newOnlineUser(@RequestBody final Object requestJSON){
		return handleNewOnlineUser(requestJSON);	
	}

	private boolean handleNewOnlineUser(Object request){
		// Info for the user will be in request sent from middleware
		return DataModel.getActiveUserModel().addOnlineUser(null);
	}


	
	
	





	

}
