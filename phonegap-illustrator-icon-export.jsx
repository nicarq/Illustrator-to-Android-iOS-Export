/**
 * Android and IOS Adobe Illustrator Icon Export
 * 
 * NOTE: Must be exported from 48x48 px art board.
 *
 * Modified from http://www.hotappsfactory.com/the-magic-illustrator-script-ai-to-ios-android/
 * 
 * Fork by Matthew Porter (http://github.com/M-Porter)
 * 	- Adapted for xhdpi, xxhdpi, and xxxhdpi.
 *  - Fixed xhdpi scaling error.
 *  - Fixed android folder naming issues.
 *  - Fixed file naming issues; file names now more friendly.
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;
var suffix;

if (document && folder) {
	suffix = prompt("Please enter file name (i.e. 'my_icon').", "") || "";
}

if (document && folder) {
	var documentName = document.name.replace(".ai","");
	
	saveToRes(100, documentName, "", suffix + "Ios", false);
	saveToRes(200, documentName, "@2x", suffix + "Ios", false);	
	
	saveToRes(100, documentName, "", "drawable-mdpi", true);
	saveToRes(150, documentName, "", "drawable-hdpi", true);
	saveToRes(200, documentName, "", "drawable-xhdpi", true);
	saveToRes(300, documentName, "", "drawable-xxhdpi", true);
	saveToRes(400, documentName, "", "drawable-xxxhdpi", true);
}

/**
* Scale and export file suffixed by densitySuffix, in a specific folder named folderName
*/
function saveToRes(scaleTo, preffix, densitySuffix, folderName, lowerCase) {
	var i, ab, file, options;
		
	var myFolder = new Folder(folder.absoluteURI + "/" + folderName);
	if(!myFolder.exists) myFolder.create();
	
	for (i = document.artboards.length - 1; i >= 0; i--) {
		document.artboards.setActiveArtboardIndex(i);
		ab = document.artboards[i];
		
		var fileName = preffix;
		
		if(lowerCase){
			var fileNameLowerCase = "";
			
			for (var j = 0; j < fileName.length; j++) {
				if(isUpperCase(fileName.charAt(j))){
					if(j > 0){
						fileNameLowerCase += "_";
					}
					 fileNameLowerCase += fileName.charAt(j).toLowerCase();
				}
				else{
					fileNameLowerCase += fileName.charAt(j);
				}
			}
			fileName = fileNameLowerCase;
		}
	
		file = new File(myFolder.fsName + "/" + suffix + densitySuffix + ".png");
		
		options = new ExportOptionsPNG24();
		options.antiAliasing = true;
		options.transparency = true;
		options.artBoardClipping = true;
		options.verticalScale = scaleTo;
		options.horizontalScale = scaleTo;
		
		document.exportFile(file, ExportType.PNG24, options);
	}
}

function isUpperCase(myString) { 
      return (myString == myString.toUpperCase()); 
} 
