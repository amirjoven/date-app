import { Dateconversioninfo } from 'src/app/dateconversioninfo';

export class Dateinfo {
    
    serverDate: string;
    serverTime: string;
    serverTimezone: string;

    serverDateConverted: string;
    serverTimeConverted: string;
    serverTimezoneConverted: string;

    
    dateConversion: Dateconversioninfo;
    constructor() {
        this.serverDate = "";
        this.serverTime = "";
        this.serverTimezone = "";
        this.dateConversion = new Dateconversioninfo;
    }

}
