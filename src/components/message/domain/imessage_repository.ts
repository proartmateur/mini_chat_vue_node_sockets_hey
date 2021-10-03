import { MessageDTO } from './message_dto'

export interface IMessageRepository {
  list(): Promise<MessageDTO[]>

  find(content_query: string): Promise<MessageDTO[]>
}
