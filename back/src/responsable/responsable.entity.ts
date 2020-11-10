import { Column, Entity, JoinColumn, OneToOne, RelationId } from "typeorm";

import { PersonEntity } from "../person/person.entity";

@Entity({ name: "responsable" })
export class ResponsableEntity {
  @OneToOne(() => PersonEntity, { primary: true, onDelete: "CASCADE" })
  @JoinColumn()
  person: PersonEntity;
  @RelationId(
    (responsableEntity: ResponsableEntity) => responsableEntity.person
  )
  personId: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  admin: boolean;
}
