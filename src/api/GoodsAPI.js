import { testStep } from '../common/helpers/pw';

export class GoodsAPI {
  /**
   * @param {import('@playwright/test').APIRequestContext} request
   */
  constructor(request) {
    this.request = request;
  }

  /**
   * @template T
   * @param {string} title
   * @param {() => T | Promise<T>} stepToRun
   * @returns {Promise<T>}
   */
  async step(title, stepToRun) {
    return await testStep(title, stepToRun);
  }

  async getAllGoods() {
    return await this.step(`GET all goods`, async () => {
      return await this.request.get('/students-api/goods', {});
    });
  }

  async getGoodById(id) {
    return await this.step(`GET good by id`, async () => {
      return await this.request.get(`/students-api/goods/${id}`, {});
    });
  }
}
