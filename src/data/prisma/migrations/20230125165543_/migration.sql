-- CreateEnum
CREATE TYPE "AGENT_ROLE" AS ENUM ('ASTRO', 'RM', 'ADMIN');

-- CreateEnum
CREATE TYPE "PAYMENT_STATUS" AS ENUM ('PAID', 'PENDING', 'CANCELLED');

-- CreateTable
CREATE TABLE "user" (
    "user_id" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "calling_number" TEXT[],
    "name" TEXT NOT NULL,
    "dob" TEXT,
    "tob" TEXT,
    "city_of_birth" TEXT,
    "hand_image" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "agent" (
    "agent_id" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "company_number" TEXT,
    "name" TEXT NOT NULL,
    "role" "AGENT_ROLE" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "agent_pkey" PRIMARY KEY ("agent_id")
);

-- CreateTable
CREATE TABLE "customer_mapping" (
    "astro_id" TEXT NOT NULL,
    "rm_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "session_data" (
    "agent_id" TEXT NOT NULL,
    "payment_time" TIMESTAMP(3) NOT NULL,
    "session_id" TEXT NOT NULL,
    "session_start_time" TIMESTAMP(3) NOT NULL,
    "duration" TIMESTAMP(3) NOT NULL,
    "recording_url" TEXT,
    "status" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "transaction" (
    "payment_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "payment_amount" BIGINT NOT NULL,
    "payment_status" "PAYMENT_STATUS" NOT NULL,
    "payment_link" TEXT NOT NULL,
    "link_gen_timestamp" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "poyment_status_update_timestamp" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "booking_data" (
    "booking_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "agent_id" TEXT NOT NULL,
    "payment_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_id_key" ON "user"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_number_key" ON "user"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "agent_agent_id_key" ON "agent"("agent_id");

-- CreateIndex
CREATE UNIQUE INDEX "customer_mapping_user_id_key" ON "customer_mapping"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "session_data_session_id_key" ON "session_data"("session_id");

-- CreateIndex
CREATE UNIQUE INDEX "transaction_payment_id_key" ON "transaction"("payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "booking_data_booking_id_key" ON "booking_data"("booking_id");

-- AddForeignKey
ALTER TABLE "customer_mapping" ADD CONSTRAINT "customer_mapping_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_mapping" ADD CONSTRAINT "customer_mapping_astro_id_fkey" FOREIGN KEY ("astro_id") REFERENCES "agent"("agent_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_mapping" ADD CONSTRAINT "customer_mapping_rm_id_fkey" FOREIGN KEY ("rm_id") REFERENCES "agent"("agent_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_data" ADD CONSTRAINT "session_data_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "agent"("agent_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_data" ADD CONSTRAINT "booking_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_data" ADD CONSTRAINT "booking_data_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "agent"("agent_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_data" ADD CONSTRAINT "booking_data_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "transaction"("payment_id") ON DELETE RESTRICT ON UPDATE CASCADE;
