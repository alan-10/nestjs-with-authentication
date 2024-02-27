import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity({name: 'user'})
export class User {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 200 , nullable: false})
  name: string;


  @Column({nullable: false})
  email: string;

  @Column({nullable: false})
  password: string;

  @Column({ default: true, nullable: false })
  isActive: boolean;

  @Column({nullable: false})
  cpf: string;

  @CreateDateColumn({})
  created_at: Date;


  @UpdateDateColumn()
  updated_at: Date;

}