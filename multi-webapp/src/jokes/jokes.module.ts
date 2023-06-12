import { Module } from '@nestjs/common';

import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';

@Module({
  imports: [],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}
