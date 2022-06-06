import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";




export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getAllHouses)
    }


    async getAllHouses(req, res, next) {
        try {
            let houses = await housesService.getHouses()
            return res.send(houses)
        } catch (error) {
            next(error)
        }

    }
}