import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('UserGroup')
export class UserGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  name: string;

  @Column('text')
  permission: string;
}
