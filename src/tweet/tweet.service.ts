import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';
import { Repository } from 'typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Injectable()
export class TweetService {
  constructor(
    private readonly userService: UsersService,
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}

  public async getAllTweets() {
    return this.tweetRepository.find();
  }

  public async getTweetForUser(userId: number) {
    return await this.tweetRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
      relations: {
        user: true,
      },
    });
  }

  public async createTweet(createTweetDto: CreateTweetDto) {
    const user = await this.userService.findUserById(createTweetDto.userId);

    if (!user) {
      return null;
    }

    const tweet = await this.tweetRepository.create({
      ...createTweetDto,
      user: user,
    });

    return await this.tweetRepository.save(tweet);
  }
}
