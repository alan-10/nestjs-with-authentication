import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity'
import { getMetadataArgsStorage } from 'typeorm';


@Module({
  imports: [TypeOrmModule.forFeature(getEntities())],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]

})
export class UserModule {}


function getEntities() {
  const entities = [];

  const storage = getMetadataArgsStorage();
  
  storage.tables.forEach(table => {
    entities.push(table.target)
  });

  return entities;
}