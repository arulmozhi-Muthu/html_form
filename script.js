document.getElementById("submit").onclick=function(event)
            {
                event.preventDefault();
                document.getElementById("table").style.display="block";
                
                let table = document.getElementById("table");
                let row = table.insertRow(-1);
                let firstName = row.insertCell(0);
                let lastName = row.insertCell(1);
                let address = row.insertCell(2);
                let pincode = row.insertCell(3);
                let gender = row.insertCell(4);
                let food = row.insertCell(5);
                let state = row.insertCell(6);
                let country = row.insertCell(7);
                
                    
                firstName.innerHTML = document.getElementById("firstName").value;
                lastName.innerHTML = document.getElementById("lastName").value;
                address.innerHTML = document.getElementById("address").value;
                pincode.innerHTML = document.getElementById("pincode").value;
                gender.innerHTML = document.getElementById("gender").value;
                   var txt=document.getElementsByName("food");
                   for(var i=0;i<txt.length;i++)
                    if(txt[i].checked)
                        food.innerHTML=txt[i].value; 
                state.innerHTML = document.getElementById("state").value;
                country.innerHTML = document.getElementById("country").value;
                
                document.getElementById("myForm").reset();
            }
    
            
           


            
           