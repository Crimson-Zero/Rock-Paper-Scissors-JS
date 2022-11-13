let Computer_choice = ["Rock","Paper","Scissor"]

function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

let Computer = random_item(Computer_choice)
console.log(Computer)

document.getElementById('Rock').addEventListener('click', ()=>{
    const Rock = "Rock"
    if (Computer === Rock){
        alert("Both Selected Rock It's a Tie")
    }
    else{
        if (Computer === "Scissor"){
            alert("Player Selected Rock Computer Selected Scissor Player wins") 
        } 

        if (Computer === "Paper"){
            alert("Player Selected Rock Computer Selected Paper Computer wins") 
        } 
    }
    
});

document.getElementById('Paper').addEventListener('click', ()=>{
    const Paper = "Paper"
    if (Computer === Paper){
        alert("Both Selected Paper It's a Tie")
    }
    else{
        if (Computer === "Scissor"){
            alert("Player Selected Paper Computer Selected Scissor Computer wins") 
        } 

        if (Computer === "Rock"){
            alert("Player Selected Paper Computer Selected Rock Player wins") 
        } 
    }

});

document.getElementById('Scissor').addEventListener('click', ()=>{
    const Scissor = "Scissor"
    if (Computer === Scissor){
        alert("Both Selected Scissor It's a Tie")
    }
    else{
        if (Computer === "Paper"){
            alert("Player Selected Scissor Computer Selected Paper Player wins") 
        } 

        if (Computer === "Rock"){
            alert("Player Selected Scissor Computer Selected Rock Computer wins") 
        } 
    }
});



