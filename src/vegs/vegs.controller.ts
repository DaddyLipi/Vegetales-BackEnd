/* eslint-disable prettier/prettier */
import { Controller, Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateVegDto } from './dto/create-veg.dto';
import { VegsService } from './vegs.service';
import { UpdateVegDto } from './dto/update-veg.dto';

@Controller('vegs')
export class VegsController {
    constructor(private vegsService: VegsService){
    }
    @Get()
    findAll() {
      return this.vegsService.findAll();
  }
  @Post()
  reate(@Body() createVegDto: CreateVegDto){
    return this.vegsService.create(createVegDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
   return this.vegsService.findOne(+id);
  }
  @Delete(':id')
  delete(@Param('id') id: string){
   return this.vegsService.delete(+id);
  }
  @Put(':id')
  update(@Param('id') id: string,@Body() updateVegDto: UpdateVegDto){
    return this.vegsService.update(+id,updateVegDto);
  }
}
