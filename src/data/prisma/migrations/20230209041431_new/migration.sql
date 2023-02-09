-- CreateTable
CREATE TABLE "record_status" (
    "status_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "agent_id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "record_status_status_id_key" ON "record_status"("status_id");

-- AddForeignKey
ALTER TABLE "record_status" ADD CONSTRAINT "record_status_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "record_status" ADD CONSTRAINT "record_status_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "agent"("agent_id") ON DELETE RESTRICT ON UPDATE CASCADE;
