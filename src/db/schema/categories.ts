import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const catagories = pgTable("categories", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text('name').notNull(),
    deletedAt: timestamp("deleted_at"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),

});

export type Category = typeof catagories.$inferSelect;
export type NewCategory = typeof catagories.$inferInsert;