image_array=["Family.JPG","Dad.JPG","Mom.JPG","Shreya.JPG","Karishma.JPG","Yash.JPG"];
names_array=["My Family","My Dad","My Mom","Me","My Sister","My Brother"];

var i=0;

function Next()
{
    document.getElementById("image").src=image_array[i];
    document.getElementById("person_name").innerHTML=names_array[i];
  i++;
  if(i==6)
  {
    i=0;
  }
 
  
}