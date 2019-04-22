import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interfaces';

@Injectable()
export class CatService {
  static getCats(): Cat[] {
    return catsDB;
  }

  static getCatById(catId): Cat {
    return catsDB.find(cat => cat.id === catId);
  }

  static deleteCat(catId): Promise<void> {
    const catIndex = catsDB.findIndex(cat => cat.id === catId);
    catsDB.splice(catIndex, 1);
    return Promise.resolve();
  }

  static addCat(addedCat): Promise<void> {
    catsDB.push(addedCat);
    return Promise.resolve();
  }

  static updateCat(updatedCat): Promise<void> {
    const catIndex = catsDB.findIndex(cat => cat.id === updatedCat.id);
    catsDB.splice(catIndex, 1, updatedCat);
    return Promise.resolve();
  }
}

const catsDB = [
  {
    id: '1',
    name: 'Jimmy',
    gender: 'male',
    age: 3,
    rank: 783,
    pic: '/img/jimmy.jpg',
    clickedInc: false,
    clickedDec: false,
  },
  {
    id: '2',
    name: 'Lichy',
    gender: 'female',
    age: 8,
    rank: 1032,
    pic: '/img/lichy.jpg',
    clickedInc: false,
    clickedDec: false,
  },
  {
    id: '3',
    name: 'Mizi',
    gender: 'female',
    age: 1,
    rank: 20568,
    pic: '/img/mizi.jpg',
    clickedInc: false,
    clickedDec: false,
  },
  {
    id: '4',
    name: 'Whiskers',
    gender: 'female',
    age: 6,
    rank: 511,
    pic: '/img/whiskers.jpg',
    clickedInc: false,
    clickedDec: false,
  },
  {
    id: '5',
    name: 'Leonard',
    gender: 'male',
    age: 3,
    rank: 679,
    pic: '/img/leonard.jpg',
    clickedInc: false,
    clickedDec: false,
  },
  {
    id: '6',
    name: 'Bianca',
    gender: 'female',
    age: 4,
    rank: 854,
    pic: '/img/bianca.jpg',
    clickedInc: false,
    clickedDec: false,
  },
];
