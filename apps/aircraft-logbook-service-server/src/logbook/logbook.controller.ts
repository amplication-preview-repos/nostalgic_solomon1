import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LogbookService } from "./logbook.service";
import { LogbookControllerBase } from "./base/logbook.controller.base";

@swagger.ApiTags("logbooks")
@common.Controller("logbooks")
export class LogbookController extends LogbookControllerBase {
  constructor(protected readonly service: LogbookService) {
    super(service);
  }
}
