import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";




export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getAllHouses)
            .post('', this.createHouse)
    }


    async getAllHouses(req, res, next) {
        try {
            let houses = await housesService.getHouses()
            return res.send(houses)
        } catch (error) {
            next(error)
        }

    }

    async createHouse(req, res, next) {
        try {
            let house = await housesService.createHouse(req.body)
            return res.send(house)
        } catch (error) {
            next(error)

        }
    }

}