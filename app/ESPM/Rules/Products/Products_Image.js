
function text_remove(sourceString, oldString, caseSensitive, startPosition) {
  startPosition = startPosition ? startPosition : 0;
  var keepPart = sourceString.substring(0,startPosition);
  var changePart = sourceString.substring(startPosition);
  var ignoreCase = caseSensitive ? "" : "i";
  var oldExpression = new RegExp(oldString, "g"+ignoreCase);
  changePart = changePart.replace(oldExpression,"");
  return keepPart.concat(changePart);
}
export default function Products_Image(clientAPI) {
  let imagePath = '/ESPM/Images/';
  imagePath = String(imagePath) + String(text_remove((clientAPI.evaluateTargetPath('#Property:PictureUrl')), '/ESPM/resources/images/', false, 0));
  return imagePath;
}
