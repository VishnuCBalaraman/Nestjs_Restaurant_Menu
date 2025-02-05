import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu')
export class MenuController {  
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async create(@Body() createMenuDto: CreateMenuDto) {
    return await this.menuService.create(createMenuDto);
  }

  @Get()
  async findAll() {
    return await this.menuService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.menuService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return await this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
    await this.menuService.remove(+id);
    return { 
      success: true,
      message: 'User Deleted Successfully',
    };
  }catch(error){
    return{
      success: false,
      message: error.message,
    };
  }
  }

  @Get('/category/:category')
  async getByCategory(@Param('category') category: string){
    return await this.menuService.getByCategory(category);
  }

}
