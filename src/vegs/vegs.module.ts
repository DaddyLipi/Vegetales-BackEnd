import { Module } from '@nestjs/common';
import { VegsController } from './vegs.controller';
import { VegsService } from './vegs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veg } from './entities/veg.entity';

@Module({
  controllers: [VegsController],
  providers: [VegsService],
  imports: [TypeOrmModule.forFeature([Veg])],
})
export class VegsModule {}
