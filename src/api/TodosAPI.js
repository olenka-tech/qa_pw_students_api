import { testStep } from '../common/helpers/pw';

export class TodosAPI {
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

  async getAllTodos() {
    return await this.step(`GET all todos`, async () => {
      return await this.request.get('/students-api/todos', {});
    });
  }

  async getTodosById(id) {
    return await this.step(`GET todos by id`, async () => {
      return await this.request.get(`/students-api/todos/${id}`, {});
    });
  }

  async getTodosByUserIdAndStatus(userId, completed) {
    return await this.step(`GET completed Todos by id`, async () => {
      return await this.request.get(`/students-api/todos`, {
        params: {
          userId,
          completed,
        },
      });
    });
  }
}
