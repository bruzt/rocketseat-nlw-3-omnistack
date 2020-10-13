import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import OrphanageImage from './OrphanageImage';

@Entity('orphanages')
export default class Orphanage extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    name!: string;

    @Column()
    latitude!: number;

    @Column()
    longitude!: number;

    @Column()
    about!: string;

    @Column()
    instructions!: string;

    @Column()
    opening_hours!: string;

    @Column()
    open_on_weekends!: boolean;

    @OneToMany(() => OrphanageImage, image => image.orphanage, { cascade: ['insert', 'update'] })
    images!: OrphanageImage[];
}