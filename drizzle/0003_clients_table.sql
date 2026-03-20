-- Migration: Create clients table for multi-tenant ClientPilot CRM

CREATE TABLE IF NOT EXISTS "clients" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "team_id" TEXT NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
  "name" TEXT NOT NULL,
  "email" TEXT,
  "company" TEXT,
  "phone" TEXT,
  "notes" TEXT,
  "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);