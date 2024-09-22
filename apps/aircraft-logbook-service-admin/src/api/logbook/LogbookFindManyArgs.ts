import { LogbookWhereInput } from "./LogbookWhereInput";
import { LogbookOrderByInput } from "./LogbookOrderByInput";

export type LogbookFindManyArgs = {
  where?: LogbookWhereInput;
  orderBy?: Array<LogbookOrderByInput>;
  skip?: number;
  take?: number;
};
