import { Module } from '@nestjs/common';


import { AdvicesContoller } from './advices.controller';
import { AdvicesService } from './advices.service';

@Module({
  imports: [],
  controllers: [AdvicesContoller],
  providers: [AdvicesService],
})
export class AdvicesModule {}
