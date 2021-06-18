import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Handlebars from 'handlebars';
import * as moment from 'moment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3002);

  Handlebars.registerHelper('formatDate', function (datetime, format) {
    if (moment) return moment(datetime).format('DD/MM/yyyy');
    else return datetime;
  });
}
bootstrap();
