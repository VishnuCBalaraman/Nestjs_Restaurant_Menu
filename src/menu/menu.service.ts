import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {

  constructor(@InjectRepository(Menu) private readonly menuRepository: Repository<Menu>){}

  async create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const menuData = await this.menuRepository.create(createMenuDto);
    return this.menuRepository.save(menuData);
  }

  async findAll(): Promise<Menu[]> {
    const menuList = await this.menuRepository.find();
    return menuList;
  } 

  async findOne(id: number): Promise<Menu> {
    //return `This action returns a #${id} menu`;
    const menu = await this.menuRepository.findOne({where: {id}});
    return menu;
  }

  async update(id: number, updateMenuDto: UpdateMenuDto):Promise<Menu> {
    //return `This action updates a #${id} menu`;
    const menu = await this.menuRepository.findOne({where: {id}});

    Object.assign(menu,updateMenuDto);

    return this.menuRepository.save(menu);
  }

  remove(id: number) {
    //return `This action removes a #${id} menu`;
    this.menuRepository.delete(id);
  }

  async getByCategory(category: string): Promise<Menu[]>{
    return await this.menuRepository.find({where:{category}});
  }
}
