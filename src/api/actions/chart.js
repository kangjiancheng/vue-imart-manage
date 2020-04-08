import { getStaticMock } from "@/utils/common"
const mockPrefix = getStaticMock(true)

export default {
  get: {
    getVchartLine: mockPrefix + '/api1/vchart/lineInfo',
    getEchartLine: mockPrefix + '/api/echart/lineInfo',
  },
  post: {
  },
  put: {
  },
  delete: {
  },
}
