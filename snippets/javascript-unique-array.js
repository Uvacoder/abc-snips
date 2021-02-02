const code = `
sourceArray.reduce((acc,item)=>{
    if(!acc.has(item.id)){
        uniqueArray.push(item);
        acc.add(item.id);
    }
        
    return acc;
},new Set());
`;

export default code;
