import { Database } from "./database.types";

type TableName = keyof Database["public"]["Tables"];

export const LINKS_TABLE: TableName = "links";
