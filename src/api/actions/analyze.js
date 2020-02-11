import { getStaticMock } from "@/utils/common"
const mockPrefix = getStaticMock(true)

export default {
  get: {
    getBlockLoss: mockPrefix + '/api/block/loss',
    getDiscussionList: mockPrefix + '/api/analyize/getDiscussionList',
  },
  post: {
    publishDiscussion: mockPrefix + '/api/analyize/publishDiscussion',
  },
  put: {
  },
  delete: {
  },
}
