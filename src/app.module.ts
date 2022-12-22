import { Module } from "@nestjs/common";
import { AppController } from "./app.controller.ts";
import { AppService } from "./app.service.ts";

@Module({
  imports: [],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
