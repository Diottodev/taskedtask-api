-- CreateTable
CREATE TABLE "users" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "errands" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "isChecked" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "errands_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
