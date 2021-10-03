import MessageFakeRepository
  from '../../../../../src/components/message/infrastructure/persistence/message_fake_repository'

it('List: Should return a list of 3 items', async () => {
  const repo = new MessageFakeRepository()
  const messages = await repo.list()
  expect(messages.length).toBe(3)
})

it('Find: Should return a list of 1 items', async () => {
  const repo = new MessageFakeRepository()
  const messages = await repo.find('Hola')
  console.log(messages)
  expect(messages.length).toBe(1)
})
