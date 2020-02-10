import { getStaticMock } from "@/utils/common"
const mockPrefix = getStaticMock(true)

export default {
  get: {
    getVchartLine: mockPrefix + '/api/vchart/lineInfo',
    getEchartLine: mockPrefix + '/api/echart/lineInfo',
  },
  post: {
  },
  put: {
  },
  delete: {
  },
}
