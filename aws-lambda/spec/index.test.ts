import { handler } from '../index'
import mockEvent from './fixtures/event'
import mockContext from './fixtures/context'

it("returns expected response", async () => {
  const expectedResult = {
    "statusCode": 200,
    "body": "{\"user\":{\"id\":\"abc123\",\"email\":\"abc123@email.com\"}}"
  }
  const expectedEvent = {
    ...mockEvent,
    "pathParameters": {
      ...mockEvent.pathParameters,
      "user_id": "abc123"
    }
  }
  const result = await handler(expectedEvent, mockContext)

  expect(result).toEqual(expectedResult)
})
