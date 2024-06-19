let  tasks=[];
let inpt=prompt("Enter a new task ('q' to quit):")
while(inpt!=='q'){
    if(inpt==='l'){
        console.log('*************');
        for(let i=0;i<tasks.length;i++)
            console.log(`${i+1} ${tasks[i]}`);
        console.log('*************');
    }
    else if(inpt==='d'){
        let del=parseInt(prompt("Enter the task number to delete:"));
        for(let item of tasks){
            if(item===tasks[del-1]){
                tasks.splice(del-1,1);
            }
        }
    }
    else{ 
        tasks.push(inpt);
    }
    if(tasks[tasks.length-1]=='d'||tasks[tasks.length-1]==='l'||tasks[tasks.length-1]==='q')
        tasks.pop(); 
    inpt=prompt("Enter a new task ('q' to quit,'d' for delete):");
}
console.log(tasks);
