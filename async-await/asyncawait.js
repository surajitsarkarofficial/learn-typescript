 function startLaptop()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Laptop started...")
        },2000)
    })
}

 function openBrowser(browser)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(browser+" launched...")
        },2000)
    })
}

 function openWebsite(website)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(website+" launched...")
        },2000)
    })
}
//using then
startLaptop()
    .then((data)=>{
    console.log(data)
    return openBrowser("Chrome")
    })
    .then((data)=>{
        console.log(data)
        return openWebsite("http://www.fb.com")
    }).then((data)=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })

    //using async await
    async function navigateToWebsite()
    {
        const d1= await startLaptop();
        console.log(d1)
        const d2= await openBrowser("Safari")
        console.log(d2)
        const d3 = await openWebsite("http://mywebsite.com")
        console.log(d3)
    }
    navigateToWebsite();