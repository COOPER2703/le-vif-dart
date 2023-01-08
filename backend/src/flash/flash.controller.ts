import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateFlash, DeleteFlash, Flash, ReadFlash } from './dto/flash.dto';
import { FlashService } from './flash.service';

@Controller('flash')
export class FlashController {

    constructor (private readonly flashService: FlashService) {}

    @Get()
    async retrieve(@Query() query: ReadFlash): Promise<Flash | Flash[]> {
        if (query.id) {
            return this.flashService.retrieveOne(query)
        }
        return this.flashService.retrieveAll()
    }

    @Post()
    create(@Body() body: CreateFlash): Promise<Flash> {
        return this.flashService.create(body)
    }

    @Delete()
    delete(@Query() query: DeleteFlash) {
        this.flashService.delete(query)
    }



}

