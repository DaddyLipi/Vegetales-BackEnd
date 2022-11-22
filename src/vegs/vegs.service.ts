/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Veg } from './entities/veg.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVegDto } from './dto/create-veg.dto';
import { UpdateVegDto } from './dto/update-veg.dto';

@Injectable()
export class VegsService {
    constructor(@InjectRepository(Veg) private vegsRepository: Repository<Veg>) {
    }
    create(createVegDto: CreateVegDto){
      return this.vegsRepository.save(createVegDto);
    }
    update(id: number, updateVegDto: UpdateVegDto){
      return this.vegsRepository.update(id,updateVegDto);
    }
    findOne(id: number){
     return this.vegsRepository.findOneBy({id});
    }
    findAll(){
      return this.vegsRepository.find();
    }
    delete(id: number){
       return this.vegsRepository.delete(id);
     }
}
