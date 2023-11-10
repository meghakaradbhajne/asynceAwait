console.log('person1:show ticket')
console.log('person2:show ticket')

const preMovie = async() =>{
    const promisewifebringhngTicket = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000)
    })
    
const getPopcorn= new Promise((resolve,reject)=> resolve('popcorn'));

let addButter = new Promise((resolve ,reject)=>resolve('butter'))
let getcoldDrink = new Promise((resolve,reject)=>resolve('coldDrink'))
    let ticket = await promisewifebringhngTicket;
    console.log(`wife:i have the ${ticket}`);
    console.log('husband:we should go in');
    console.log('wife: no  i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband:I got some ${popcorn}`)
    console.log('husband:we should go in');
    console.log('wife:i need butter on my popcorn');

    let butter = await addButter;

    console.log(`husband:I got some ${butter} on popcorn`)
    console.log('husband:anything else darling?');
    console.log('wife:lets got we are getting late');
    console.log('husband:thank you for the reminder *grins');

    let coldDrink = await getcoldDrink;

    console.log(`husband:lets take some ${coldDrink}`)
    return ticket;
}

preMovie().then((m)=> console.log(`person3: show ${m}`))

console.log('person4show ticket')
console.log('person5:show ticket')