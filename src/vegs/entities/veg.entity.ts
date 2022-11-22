/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Veg {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  categoria: string;
  @Column()
  nombreCientico: string;
  @Column()
  ratingPersonal: number;
}