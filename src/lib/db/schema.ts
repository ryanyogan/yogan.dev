import { bigint, mysqlTable, text, timestamp } from "drizzle-orm/mysql-core";

export const image = mysqlTable("image", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  imageUrl: text("image_url"),
  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
});

export type Image = typeof image.$inferSelect;
export type NewImage = typeof image.$inferInsert;
