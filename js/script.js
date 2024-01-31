function getMoney(){
    console.log('Show me money');
}

function loseMoney(){
    console.error('Oh! what a pity');
}

const promise = new Promise(( resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random().toFixed(1);
    console.log(randomNumber);
    if (randomNumber <= 0.5){
        resolve();
    } else
    {
        reject();
    }
    }, 2000);    
});

function realPromise (){
    return promise
}

realPromise().then(getMoney).catch(loseMoney);