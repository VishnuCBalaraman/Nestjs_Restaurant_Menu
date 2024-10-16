import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { Menu } from './menu/entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb', // Use 'mongodb' for MongoDB
      host: '127.0.0.1',
      port: 27017,
      //username: 'yourUsername', // Optional, depending on your MongoDB setup
      //password: 'yourPassword', // Optional, depending on your MongoDB setup
      database: 'menu',
      entities: [Menu], // Add your entities here
      synchronize: true, // Use with caution in production
    }),
    MenuModule, 
  ],
 
})
export class AppModule {}
