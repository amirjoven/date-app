package com.amirsproject.restservice;

import java.time.ZoneId;
import java.text.SimpleDateFormat;  
import java.util.Date;  

public class ServerDateResource {
    ZoneId z = ZoneId.systemDefault();
    private Date serverDate = null;

    public ServerDateResource(){
        serverDate = new Date();
    }

    public String getServerDate(){
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");          
        return formatter.format(serverDate);
    }
	
    public String getServerTime(){
        SimpleDateFormat formatter = new SimpleDateFormat("HH:mm:ss");              
        return formatter.format(serverDate);
    }    
	
    public String getServerTimezone(){
        return z.toString();        
    }
	
	// public long getServerUnixTimestamp(){
	// 	return serverDate.getTime() / 1000L;
	// }
}
