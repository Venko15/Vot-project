import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesController } from './jokes/jokes.controller';
import { JokesService } from './jokes/jokes.service';
import { JokesModule } from './jokes/jokes.module';
import { AdvicesModule } from './advices/advices.module';
import { AdvicesContoller } from './advices/advices.controller';
import { AdvicesService } from './advices/advices.service';
import { QuotesController } from './quotes/quotes.controller';
import { QuotesService } from './quotes/quotes.service';
import { QuotesModule } from './quotes/quotes.module';
import { ThrottlerModule } from '@nestjs/throttler/dist/throttler.module';
@Module({
  imports: [ThrottlerModule.forRoot({ttl:60, limit:15}),JokesModule, AdvicesModule, QuotesModule],
  controllers: [AppController, JokesController, AdvicesContoller, QuotesController],
  providers: [AppService, JokesService, AdvicesService,QuotesService],
})
export class AppModule {}