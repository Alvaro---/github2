import { Injectable } from '@nestjs/common';
import * as axios from '@nestjs/axios';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getBranch() {
    // const res = await this.httpService
    //   .get('https://api.github.com/repos/Alvaro---/nesttest/commits')
    //   .toPromise();

    // const res = await lastValueFrom(
    //   this.httpService.get(
    //     'https://api.github.com/repos/Alvaro---/nesttest/commits',
    //   ),
    //   { defaultValue: '' },
    // );
    let res;
    try {
      res = await lastValueFrom(
        this.httpService.get('https://api.github.com/users/Alvaro---'),
      );
    } catch (error) {
      console.log(error);
    }
    console.log('res', res.data);
    return res.data;
  }

  async getCommits(userGitHub, repo) {
    const res = await lastValueFrom(
      this.httpService.get(
        `https://api.github.com/repos/${userGitHub}/${repo}/commits`,
      ),
    );
    return res.data;
  }
}
