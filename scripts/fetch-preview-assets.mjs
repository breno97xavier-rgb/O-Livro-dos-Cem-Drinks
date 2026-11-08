import fs from 'node:fs/promises';
import path from 'node:path';
const files = [
 ['capa-original.png','https://at.adobe.com/QhmQBSuH3vsybqTA'],
 ['mockup-fornecido.png','https://at.adobe.com/ykSUaLaBt7FxVYdM'],
 ['augusto-original.png','https://at.adobe.com/aAt9XPci1rkJdW5f'],
 ['clarice.jpg','https://at.adobe.com/67NrWoGIicDKD2ZG'],
 ['eduardo.jpg','https://at.adobe.com/YvQBTJRQ9bmZLIug'],
 ['helena.jpg','https://at.adobe.com/IIqbUJaB6VQ4e25d'],
 ['waldir.jpg','https://at.adobe.com/7Vo5IpWLkvhS05YF'],
 ['livro.pdf','https://at.adobe.com/PIdELadZMawF1LHO'],
 ['amostra_abertura_gin.png','https://at.adobe.com/Bscgx3GWwP3heJfZ'],
 ['amostra_dossie_negroni.png','https://at.adobe.com/NO5pJH8QknzafvPY'],
 ['amostra_receita_aperol_spritz.png','https://at.adobe.com/yRkzef5wGGp59Mad'],
 ['amostra_receita_negroni.png','https://at.adobe.com/hqYsZvfAOtEcXCcU'],
 ['amostra_sumario.png','https://at.adobe.com/gpIzOLBDGnTwvVRH']
];
await fs.mkdir('public/assets', {recursive:true});
for (const [name,url] of files) {
 const r=await fetch(url,{redirect:'follow'});
 if(!r.ok) throw new Error(name+' HTTP '+r.status);
 const data=Buffer.from(await r.arrayBuffer());
 const png=data.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]));
 const jpg=data[0]===255&&data[1]===216;
 const pdf=data.subarray(0,4).toString()==='%PDF';
 if(!png&&!jpg&&!pdf) throw new Error(name+' unexpected file type: '+r.headers.get('content-type')+' '+data.subarray(0,60).toString());
 await fs.writeFile(path.join('public/assets',name),data);
 console.log(name,data.length);
}
