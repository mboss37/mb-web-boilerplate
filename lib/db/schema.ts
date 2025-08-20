import { pgTable, text, timestamp, uuid, boolean, pgSchema } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { 
  authenticatedRole, 
  anonRole, 
  serviceRole, 
  authUsers 
} from "drizzle-orm/supabase";

// Supabase auth schema
const auth = pgSchema('auth');

// User profiles table
export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().notNull(),
  email: text("email").notNull(),
  fullName: text("full_name"),
  username: text("username").unique(),
  avatarUrl: text("avatar_url"),
  website: text("website"),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
}, (table) => ({
  // Foreign key to auth.users
  idFk: sql`foreign key (${table.id}) references ${authUsers.id} on delete cascade`,
}));

// Example: Posts table for blog/content
export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  slug: text("slug").unique().notNull(),
  published: boolean("published").default(false),
  authorId: uuid("author_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
}, (table) => ({
  // Foreign key to profiles
  authorFk: sql`foreign key (${table.authorId}) references ${profiles.id} on delete cascade`,
}));

// Example: Tags table
export const tags = pgTable("tags", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// Example: Post tags junction table
export const postTags = pgTable("post_tags", {
  postId: uuid("post_id").notNull(),
  tagId: uuid("tag_id").notNull(),
}, (table) => ({
  // Composite primary key
  pk: sql`primary key (${table.postId}, ${table.tagId})`,
  // Foreign keys
  postFk: sql`foreign key (${table.postId}) references ${posts.id} on delete cascade`,
  tagFk: sql`foreign key (${table.tagId}) references ${tags.id} on delete cascade`,
}));

// Export types
export type Profile = typeof profiles.$inferSelect;
export type NewProfile = typeof profiles.$inferInsert;
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
export type Tag = typeof tags.$inferSelect;
export type NewTag = typeof tags.$inferInsert;
export type PostTag = typeof postTags.$inferSelect;
export type NewPostTag = typeof postTags.$inferInsert;
