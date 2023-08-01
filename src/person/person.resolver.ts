import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { PersonService } from "./person.service";
import { Person as PersonModel } from "@prisma/client";
import { Person } from "./schema/person.schema";
import { AddPersonArgs } from "./args/add.person.args";

@Resolver()
export class PersonResolver{

    constructor(private readonly personService: PersonService){}

    @Query((returns) => [Person])
    getAllPersons(): Promise<PersonModel[]>{
        return this.personService.getAllPerson()
    }

    @Query((returns) => Person, {name:"findPersonById", nullable: true})
    getPersonById(@Args({name:"personId", type: ()=>Int}) id : number): Promise<PersonModel>{
        return this.personService.getPersonById(id);
   }

   @Mutation(returns => Person, {name: "addPerson"}) 
   addPerson(@Args("addPersonArgs") addPersonArgs: AddPersonArgs ): Promise<PersonModel>{
    return this.personService.addPerson(addPersonArgs);
   }

   @Mutation(returns =>Person, {name:"updatePerson"})
   updatePerson(@Args({name:"personId", type:()=>Int}) id: number, 
    @Args("updatePersonArgs") updatePersonArgs: AddPersonArgs):Promise<PersonModel>{
        return this.personService.updatePerson(id,updatePersonArgs)
   }

   @Mutation(returns=>Person, {name:"deletePerson"})
   deletePerson(@Args({name:"personId", type: ()=>Int}) id: number): Promise<PersonModel>{
    return this.personService.deletePerson(id)
   }

}