import { Repository, getRepository } from "typeorm";

import { PersonEntity } from "./person.entity";

export class PersonService {
  private personRepository: Repository<PersonEntity>;

  constructor() {
    this.personRepository = getRepository(PersonEntity);
  }

  save(person: PersonEntity): Promise<PersonEntity> {
    return this.personRepository.save(person);
  }
}
