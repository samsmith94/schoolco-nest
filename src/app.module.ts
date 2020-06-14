import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobController } from './job/job.controller';
import { JobService } from './job/job.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { JobModule } from './job/job.module';
import { EmployeeModule } from './employee/employee.module';

import { MetamorphosisModule } from '@fabio.formosa/metamorphosis-nest';

@Module({
  imports: [
    MetamorphosisModule.register(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      synchronize: true,
      entities: [
        __dirname + '/**/*.entity{.ts,.js}'
      ],
    }),
    JobModule,
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
