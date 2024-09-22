import { Module } from "@nestjs/common";
import { LogbookModuleBase } from "./base/logbook.module.base";
import { LogbookService } from "./logbook.service";
import { LogbookController } from "./logbook.controller";
import { LogbookResolver } from "./logbook.resolver";

@Module({
  imports: [LogbookModuleBase],
  controllers: [LogbookController],
  providers: [LogbookService, LogbookResolver],
  exports: [LogbookService],
})
export class LogbookModule {}
