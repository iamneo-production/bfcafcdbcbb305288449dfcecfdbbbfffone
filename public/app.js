function cal()
        {
        let a = [1,2,3,4,5,6,7,8,9,0,'!','@','#','$','%','^','&','*',']',')'];
        let sent = document.getElementById("text").value;
        let words = sent.split(" ");
        let count =0;
        for(let i in words)       
        {
            if(words[i] in a)
            {

            }   
            else
            {
                count+=1;
            }
        }
        document.getElementById("ans").innerHTML = "Word count: "+count;
        }