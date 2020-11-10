import { Repository, getRepository } from "typeorm";

import { ResponsableEntity } from "./responsable.entity";

export class ResponsableService {
  private responsableRepository: Repository<ResponsableEntity>;

  constructor() {
    this.responsableRepository = getRepository(ResponsableEntity);
  }

  save(responsable: ResponsableEntity): Promise<ResponsableEntity> {
    return this.responsableRepository.save(responsable);
  }

  getAdmin(): Promise<ResponsableEntity | undefined> {
    return this.responsableRepository.findOne({ where: { admin: true } });
  }
}
