/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LogbookService } from "../logbook.service";
import { LogbookCreateInput } from "./LogbookCreateInput";
import { Logbook } from "./Logbook";
import { LogbookFindManyArgs } from "./LogbookFindManyArgs";
import { LogbookWhereUniqueInput } from "./LogbookWhereUniqueInput";
import { LogbookUpdateInput } from "./LogbookUpdateInput";

export class LogbookControllerBase {
  constructor(protected readonly service: LogbookService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Logbook })
  async createLogbook(
    @common.Body() data: LogbookCreateInput
  ): Promise<Logbook> {
    return await this.service.createLogbook({
      data: data,
      select: {
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Logbook] })
  @ApiNestedQuery(LogbookFindManyArgs)
  async logbooks(@common.Req() request: Request): Promise<Logbook[]> {
    const args = plainToClass(LogbookFindManyArgs, request.query);
    return this.service.logbooks({
      ...args,
      select: {
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Logbook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async logbook(
    @common.Param() params: LogbookWhereUniqueInput
  ): Promise<Logbook | null> {
    const result = await this.service.logbook({
      where: params,
      select: {
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Logbook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLogbook(
    @common.Param() params: LogbookWhereUniqueInput,
    @common.Body() data: LogbookUpdateInput
  ): Promise<Logbook | null> {
    try {
      return await this.service.updateLogbook({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          endDate: true,
          id: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Logbook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLogbook(
    @common.Param() params: LogbookWhereUniqueInput
  ): Promise<Logbook | null> {
    try {
      return await this.service.deleteLogbook({
        where: params,
        select: {
          createdAt: true,
          description: true,
          endDate: true,
          id: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}