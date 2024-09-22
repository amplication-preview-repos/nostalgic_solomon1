import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LogbookServiceBase } from "./base/logbook.service.base";

@Injectable()
export class LogbookService extends LogbookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
