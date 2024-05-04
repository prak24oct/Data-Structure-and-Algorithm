//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurring( myArray: any): string{
    for(let i =0 ; i<myArray.length ; i++){
        for(let j=i; j<myArray.length ; j++){   //i+1
            let recur = myArray[i]
            if(myArray[j] == recur){
                return myArray[j]
            }

        }
    }

    return 'not found';
}

console.log(firstRecurring([2,5,1,2,3,5,1,2,4]))