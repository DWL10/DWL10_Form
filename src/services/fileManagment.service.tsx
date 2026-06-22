import JSZip from "jszip";
import * as fs from "fs";
import * as path from "path";
export class FileManagment {
    private data :{
            type_of_commission : string,
            comicType : string,
            backgr : string,
            extCharacer : string,
            description : string,
            publish : string,
            clientContact : string,
            clientSite : string,
            total : 0
        }
    private files: File[];
    private json:any;
    private blob:any;
    private jsonFile: File;
    private clientName: string;

    constructor(data:any,files:File[])
    {
        this.data = data;
        this.files = files
        this.json = JSON.stringify(this.data,null,2);
        this.blob = new Blob([this.json],{type:'application/json'});
        this.clientName = this.data.clientContact;
        this.jsonFile = new File([this.blob], `${this.clientName}.json`, { type: 'application/json' });
    }
    
    getJson()
    {
        return this.jsonFile;
    }

    async createZip(): Promise<File | null> {
    
        if (!this.files || this.files.length === 0) {
        return null;
        }
        const zip = new JSZip();

        // zip.file(this.jsonFile.name, this.jsonFile);

        for (const file of this.files) {
        zip.file(file.name, file);
        }
        const zipBlob = await zip.generateAsync({ 
        type: 'blob',
        compression: 'DEFLATE' 
        });

        const nombreZip = `${this.clientName || 'imagenes'}.zip`;
        const zipFile = new File([zipBlob], nombreZip, { type: 'application/zip' });
        
        return zipFile;
  }
    


}




