// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    const name = cats.push('Ralph')
    return name
}

function destructivelyPrependCat(){
    const name = cats.unshift('Bob')
    return name
}

function destructivelyRemoveLastCat(){
    const name = cats.pop()
    return name
}

const destructivelyRemoveFirstCat = () =>{
    const name = cats.shift()
    return name
}

function appendCat(){
    const name = [...cats, 'Broom']
    return name

}

function prependCat(){
    const name = ['Arnold', ...cats]
    return name
}

function removeLastCat(){
    const name = cats.slice(0, length-1)
    return name
}

function removeFirstCat(){
    const name = cats.slice(1)
    return name
}