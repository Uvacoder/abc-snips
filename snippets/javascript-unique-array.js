const code = `
sourceArray.reduce((acc,item)=>{
    if(!acc.has(item.id)){
        uniqueArray.push(item);
        acc.add(item.id);
    }
        
    return acc;
},new Set());
`;

const snippet = {
  title: "Javascript Logic | Unique Array using Sets ",
  code,
};

export default snippet;
