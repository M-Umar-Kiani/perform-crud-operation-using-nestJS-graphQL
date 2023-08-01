import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class AddPersonArgs{
    // @Field((type) => Int)
    // id: number;

    @Field()
    username: string;

    @Field()
    email: string;
}