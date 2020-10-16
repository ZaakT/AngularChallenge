import { Injectable } from '@angular/core'
import { GameConsole } from '../game-console.interface'

@Injectable({
  providedIn: 'root'
})
export class GameConsoleService {
  list(): GameConsole[] {
    return [
      {
        name: 'Playstation 4',
        sales2017: 20,
        sales2018: 18,
        Asales2017: 20 / 52,
        Asales2018: 18 / 52
      },
      {
        name: 'X Box One',
        sales2017: 7.62,
        sales2018: 6.96,
        Asales2017: 7.62 / 52,
        Asales2018: 6.96 / 52
      },
      {
        name: 'Switch',
        sales2017: 0,
        sales2018: 16.33,
        Asales2017: 0 / 52,
        Asales2018: 16.33 / 52
      }
    ]
  }
}
