import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Prisma, Person } from "@prisma/client";
// import { Person } from "./schema/person.schema";

@Injectable()
export class PersonService{

    constructor(private prismaPerson: PrismaService){}

    async addPerson(data: Prisma.PersonCreateInput): Promise<Person>{
        return this.prismaPerson.person.create({
            data: data
        })
    }

    async deletePerson(id: number): Promise<Person>{
        return this.prismaPerson.person.delete({
            where:{
                id: id
            }
        })
    }

    async updatePerson(id: number, data: Prisma.PersonUpdateInput): Promise<Person>{
        return this.prismaPerson.person.update({
            where: {
                id: id
            },
            data: data
        })
    }

    async getPersonById(id: number): Promise<Person>{
        return this.prismaPerson.person.findUnique({
            where:{
                id: id
            }
        })
    }

    async getAllPerson() : Promise<Person[]>{
        return this.prismaPerson.person.findMany();
    }

}