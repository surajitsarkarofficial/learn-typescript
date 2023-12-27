function bookTicket()
{
    return new Promise((resolve,reject)=>{
        const ticketStatus = 'Confirmed';

        if(ticketStatus==='Confirmed')
        {
            resolve("You can board the flight.")
        }else{
            reject("OOPS!!! Sorry you cannot board the flight.")
        }

    })
   
}


setTimeout(()=>{
    bookTicket().then(data=>{
        console.log(data)
    })
},2000);

function print(msg)
{
    console.log(msg)
}
console.log("Hello Surajit");
print("Welcome to the JS learning")
