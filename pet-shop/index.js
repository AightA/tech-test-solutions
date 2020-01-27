var petShop = [
    { name: 'Tom', species: 'cat', sold: false },
    { name: 'Gromit', species: 'dog', sold: true },
    { name: 'Daffy', species: 'duck', sold: false }
];

let sales = petShop.filter((pet) => {
    var petForSale = [];
        if (pet.sold == false) {
            petForSale.push(pet.species)
            console.log(petForSale)
        };
    });
    