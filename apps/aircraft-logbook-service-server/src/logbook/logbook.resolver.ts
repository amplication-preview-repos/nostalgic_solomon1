import * as graphql from "@nestjs/graphql";
import { LogbookResolverBase } from "./base/logbook.resolver.base";
import { Logbook } from "./base/Logbook";
import { LogbookService } from "./logbook.service";

@graphql.Resolver(() => Logbook)
export class LogbookResolver extends LogbookResolverBase {
  constructor(protected readonly service: LogbookService) {
    super(service);
  }
}
