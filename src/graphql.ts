
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddPersonArgs {
    username: string;
    email: string;
}

export interface Person {
    id: number;
    username: string;
    email: string;
}

export interface IQuery {
    index(): string | Promise<string>;
    getAllPersons(): Person[] | Promise<Person[]>;
    findPersonById(personId: number): Nullable<Person> | Promise<Nullable<Person>>;
}

export interface IMutation {
    addPerson(addPersonArgs: AddPersonArgs): Person | Promise<Person>;
    updatePerson(personId: number, updatePersonArgs: AddPersonArgs): Person | Promise<Person>;
    deletePerson(personId: number): Person | Promise<Person>;
}

type Nullable<T> = T | null;
