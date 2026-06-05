import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  // GET /tweet
  @Get()
  public getAllTweets() {
    return this.tweetService.getAllTweets();
  }

  // GET /tweet/101
  @Get(':userId')
  public getTweetsByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.tweetService.getTweetForUser(userId);
  }

  @Post()
  public createTweet(@Body() tweet: CreateTweetDto) {
    return this.tweetService.createTweet(tweet);
  }
}
