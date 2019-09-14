const Hashmap = require('./hashmap')

function main(){
    const lor = new Hashmap()
    lor.MAX_LOAD_RATIO = 0.5
    lor.SIZE_RATIO = 3

    lor.set('Hobbit','Bilbo')
    lor.set('Hobbit','Frodo')
    lor.set('Wizard','Gandolf')
    lor.set('Human','Aragon')
    lor.set('Elf','Legolas')
    lor.set('Maiar','The Necromancer')
    lor.set('Maiar','Sauron')
    lor.set('RingBearer','Gollum')
    lor.set('LadyOfLight','Galadriel')
    lor.set('HalfElven','Arwen')
    lor.set('Ent','Treebeard')

    console.log(lor._hashTable)
    console.log(lor.length)
    console.log(lor.get('Maiar'))
    console.log(lor.get('Hobbit'))
    console.log(lor.get('Maior'))

}

main()

/**
 * Important that a key is unique. If you use the key again you will simply overwrite.
 * 
 */



