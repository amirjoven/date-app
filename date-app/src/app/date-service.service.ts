import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { Dateinfo } from 'src/app/dateinfo';
import { map, Observable,switchMap } from 'rxjs';
import { Dateconversioninfo } from './dateconversioninfo';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {
  
  private dateserviceUrl: string;  
  private dateConvertionServiceUrl: string;
    
  constructor(private http: HttpClient) {
    this.dateserviceUrl = 'http://54.197.40.117:8080/rest-service/';
    this.dateConvertionServiceUrl = 'http://api.timezonedb.com/v2.1/convert-time-zone?key=ZI9A9VBW48IS';
  }

  public getDate(): Observable<Dateinfo> {        
    return this.http.get<Dateinfo>(this.dateserviceUrl).pipe(switchMap(
      datedata => {
        const unixservertime = new Date(datedata.serverDate+'T'+datedata.serverTime).getTime() / 1000;
        const options = { params: new HttpParams().set('format', 'json').set("from",datedata.serverTimezone ).set('to','Asia/Shanghai').set('time',unixservertime) }           
          return this.http.get<Dateconversioninfo>(this.dateConvertionServiceUrl,options).pipe(map(convdata  =>  
              {                
                const dInfo = datedata;                
                dInfo.dateConversion = convdata;
                var sndate = new Date(dInfo.dateConversion.toTimestamp * 1000);
                var convertedDate = new Date(dInfo.dateConversion.toTimestamp * 1000);
                var convertedMonth = convertedDate.getMonth() + 1;
                var convertedDay = convertedDate.getDate();
                var convertedHours = convertedDate.getHours();
                var convertedMinutes = convertedDate.getMinutes();
                var convertedSecs = convertedDate.getSeconds();

                dInfo.serverDateConverted = convertedDate.getFullYear() + '-' + (convertedMonth < 10 ? '0' + convertedMonth : convertedMonth) + '-' + (convertedDay < 10 ? '0' + convertedDay : convertedDay);
                dInfo.serverTimeConverted = (convertedHours < 10 ? '0' + convertedHours : convertedHours) + ':' + (convertedMinutes < 10 ? '0' + convertedMinutes : convertedMinutes) + ':' + (convertedSecs < 10 ? '0' + convertedSecs : convertedSecs);
                dInfo.serverTimezoneConverted = convdata.toZoneName;

                return dInfo
              } 
            ));
        }
      ));        
  }
}
