// const vendingMachine = [
//     {name: "BBQ Lays Chips", price: 1},
//     {name: "Takis", price: 5},
//     {name: "Frito Lays", price: 1}
// ]
// const vend = (num) => {
//     return vendingMachine[num]
// }

// // vendingMachine.vend()
// console.log(vend(1))   // could not get vendingMachine.vend() to work

const vendingMachine = {
    "machineOptions":
    [{name: "BBQ Lays Chips", price: 1},
        {name: "Takis", price: 5},
        {name: "Frito Lays", price: 1}],
    vend: (num) => {
        console.log(vendingMachine["machineOptions"][num])
    }
}

vendingMachine.vend(1)

// (if check) ? (value if true) : (value if false)