import { IMessageRepository } from '../../domain/imessage_repository'
import { MessageDTO } from '../../domain/message_dto'

import { v4 as uuidv4 } from 'uuid'

export default class MessageFakeRepository implements IMessageRepository {
  private items

  constructor() {
    this.items = [
      new MessageDTO(
        uuidv4(),
        'Enrique Nieto Martínez',
        'Esto es un mensaje Fake!',
        '18:50',
        '2021-10-02',
      ),

      new MessageDTO(
        uuidv4(),
        'Enrique Nieto Martínez',
        'Segundo mensaje!',
        '18:51',
        '2021-10-02',
      ),

      new MessageDTO(
        uuidv4(),
        'Diana Carolina',
        'Hola a todos',
        '18:51',
        '2021-10-02',
      ),
    ]
  }

  find(content_query: string): Promise<MessageDTO[]> {

    return Promise.resolve(this.items.filter( x => x.content.includes(content_query) ));

  }

  list(): Promise<MessageDTO[]> {
    return Promise.resolve(this.items)
  }

}
