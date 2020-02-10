import { getStaticMock } from "@/utils/common"
const mockPrefix = getStaticMock(true)

export default {
  get: {
    getLineChart: mockPrefix + '/api/chartInfo',
  },
  post: {
  },
  put: {
  },
  delete: {
  },
}
