const color = 'black';
if(color === 'red'){
    console.log('you are red friend');
}
else if(color === 'blue'){
    console.log('you are blue friend');
}
else if(color === 'yellow'){
    console.log('you are yellow friend');
}
else if(color === 'black'){
    console.log('you are kala friend');
}
else{
    console.log('you are best friend');
}

switch(color){
    case 'red':
    console.log('you are red friend');
    break;
    case 'blue':
        console.log('you are lal friend');
        break;
    case 'yellow':
        console.log('you are holud friend');
        break;  
    case 'black':
        console.log('you are kala friend');
        break;
    default:
        console.log('you are best friend');              
}