import { NestFactory } from '@nestjs/core';
import { Seeder } from './db/seeders/seeder';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const seeder = app.get(Seeder);
  // await seeder.seed();
  await app.listen(3000);
}
bootstrap();
