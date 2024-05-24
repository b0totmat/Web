const fs = require('fs');

if(!fs.existsSync('./versek')) {
    fs.mkdir('./versek', err => {
        if(err) console.error(err);
        console.log('Kész a mappa');
    });
}

fs.writeFile('./versek/Nyár, nyár, nyár.txt', `Nyár,
A régi vágyam egyre jobban
Lobban,
De vár, még egyre vár.
 
Kár
Így késlekedned, mert az éj setétül.
Az élet
Siralmas és sivár
Enélkül.
 
Gigászi vágyam éhes, mint a hörcsög,
Görcsök
Emésztik s forró titkom mélye szörcsög.
 
Mostan hajolj feléje.
Közel a lázak kéjes éje.
Akarod?
Remegve nyújtsd a szájad és karod.
Itt ital illatja tégedet vár.
Nektár.
 
Te
Hűtelen, boldog leszel majd újra, hidd meg.
Idd meg.`, () => {
    console.log('done');
});

fs.readFile('./versek/Nyár, nyár, nyár.txt', (err, data) => {
    if(err) console.error(err);
    console.log(data.toString());
});
