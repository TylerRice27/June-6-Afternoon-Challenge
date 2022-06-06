
let fakeHouses = {
    houses: [
        { address: '907 Cool Street', floors: 5, color: 'Red' },
        { address: '72 W Street', floors: 3, color: 'Blue' },
    ]
}



class HousesService {

    async getHouses() {
        return fakeHouses.houses
    }

    createHouse(houseData) {
        fakeHouses.houses.push(houseData)
        return houseData
    }


}













export const housesService = new HousesService()