import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Person{
    @Field((type) => Int)
    id: number;

    @Field()
    username: string;

    @Field()
    email: string;
}