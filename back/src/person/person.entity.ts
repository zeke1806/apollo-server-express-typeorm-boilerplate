import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "person" })
export class PersonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  about: string;

  @Column({ type: "timestamptz" })
  created: Date;

  @Column({ name: "image_url", nullable: true })
  imageUrl: string;

  @Column({ name: "image_hash", nullable: true })
  imageHash: string;
}
