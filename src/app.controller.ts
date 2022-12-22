import { Controller, Get, Inject } from "@nestjs/common";
import { AppService } from "./app.service.ts";

@Controller()
export class AppController {
  constructor(
    @Inject(AppService) private service: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
