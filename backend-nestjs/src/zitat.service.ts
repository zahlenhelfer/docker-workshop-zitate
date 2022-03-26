import { Injectable } from '@nestjs/common';
const lineReader = require('line-reader');
import * as path from 'path';

@Injectable()
export class ZitatService {
    zitate = [];

    constructor() {
        this.readFile();
    }

    getPathToFile(fileName: string): string {
        return path.resolve(__dirname, fileName);
    }

    readFile() {
        lineReader.eachLine(this.getPathToFile('../data/zitate.txt'), line => {
            this.zitate.push(line);
        });
    }

    getZitat(): object {
        const index = Math.round(Math.random() * (this.zitate.length - 1));
        return { zitat: this.zitate[index] };
    }
}
