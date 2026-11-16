import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { table } from 'console';

@Injectable()
export class TravelService {
  private trips = [
    { id: 1, name: 'to china', price: 9000 },
    { id: 2, name: 'to morroco', price: 4000 },
  ];
  create(createTravelDto: CreateTravelDto) {
    this.trips.push();

    return 'This action adds a new travel';
  }

  findAll() {

    return this.trips ;
  }

  findOne(id: number) {
    return this.trips[id-1];
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
