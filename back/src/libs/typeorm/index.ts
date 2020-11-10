import { PersonEntity } from "../../person/person.entity";
import { PersonService } from "../../person/person.service";
import { ResponsableEntity } from "../../responsable/responsable.entity";
import { ResponsableService } from "../../responsable/responsable.service";
import configs from "../../configs";
import { createConnection } from "typeorm";

async function createAdmin(): Promise<void> {
  const personService = new PersonService();
  const responsableService = new ResponsableService();

  let admin = await responsableService.getAdmin();
  if (!admin) {
    let person = new PersonEntity();
    person.name = "admin";
    person.created = new Date();
    person.about = "system admin";
    person = await personService.save(person);

    admin = new ResponsableEntity();
    admin.person = person;
    admin.username = "admin";
    admin.password = "admin";
    admin.admin = true;
    await responsableService.save(admin);
    console.log("Creation admin account ok");
  }
}

export const connectDB = async () => {
  const connexion = await createConnection(configs.database);
  console.log("Database connection ok");

  await createAdmin();
};
