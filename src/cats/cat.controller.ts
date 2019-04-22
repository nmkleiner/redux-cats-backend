import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './interfaces/cat.interfaces';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): Cat[] {
    return CatService.getCats();
  }

  @Get(':id')
  findOne(@Param() params): Cat {
    return CatService.getCatById(params.id);
  }

  @Delete(':id')
  deleteOne(@Param() params): Promise<void> {
    return CatService.deleteCat(params.id);
  }

  @Post()
  addOne(@Body() {addedCat}: {addedCat: Cat}): Promise<void> {
    return CatService.addCat(addedCat);
  }
  @Put()
  updateOne(@Body() {updatedCat}): Promise<void> {
    return CatService.updateCat(updatedCat);
  }
}
