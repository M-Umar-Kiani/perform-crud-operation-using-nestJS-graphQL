import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PersonResolver } from './person.resolver';
import { PersonService } from './person.service';


@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, PersonResolver, PersonService],
  
})
export class PersonModule {}
