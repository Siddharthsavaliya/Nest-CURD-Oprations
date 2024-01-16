import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}
  async create(createBookDto: CreateBookDto) {
    const book: Book = new Book();
    book.bookName = createBookDto.bookName;
    book.author = createBookDto.author;
    book.price = createBookDto.price;
    return await this.bookRepository.save(book);
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  async findOne(id: number) {
    const options: FindOneOptions<Book> = { where: { id } };
    return await this.bookRepository.findOne(options);
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book: Book = new Book();
    book.bookName = updateBookDto.bookName;
    book.author = updateBookDto.author;
    book.price = updateBookDto.price;
    book.id = id;
    return await this.bookRepository.save(book);
  }

  async remove(id: number) {
    return await this.bookRepository.delete(id);
  }
}
