import { Injectable } from '@nestjs/common';
import { City, ID } from './interfaces/interfaces';
import { DATA } from './data/data';

@Injectable()
export class AppService {
  cityList = [...DATA];
  private _id = Math.max(...this.cityList.map(({ id }) => +id));

  findAll(): City[] {
    return this.cityList;
  }

  findOne(id: ID) {
    return this.getEntityById(id);
  }

  create(city: City) {
    const id = ++this._id;
    this.cityList.push({ ...city, id });

    return this.getEntityById(id);
  }

  update(id: ID, city: City) {
    this.cityList = this.cityList.map((entity) => {
      if (+entity.id === +id) {
        return { ...entity, ...city };
      }
      return entity;
    });

    return this.getEntityById(id);
  }

  remove(id: ID) {
    const index = this.cityList.findIndex((city) => city.id === +id);
    if (index !== -1) {
      this.cityList.splice(index, 1);
    }
  }

  private getEntityById(id: ID) {
    return this.cityList.find((entity) => +entity.id === +id);
  }
}
