import supertest from "supertest";
import { tasksRouter } from "./tasksRouter";

const request = supertest(tasksRouter);


describe('Tasks API', () => {
  it('should retrieve all tasks', async () => {
    const response = await request.get('/tasks');

    // Check the status code
    expect(response.status).toBe(200);

    // Check the Content-Type header
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

    // If you want to check the structure of the returned tasks
    // expect(response.body).toEqual(
    //   expect.arrayContaining([
    //     expect.objectContaining({
    //       name: expect.any(String),
    //       date: expect.any(String),
    //       description: expect.any(String),
    //       isCompleted: expect.any(Boolean),
    //     }),
    //   ]),
    // );
  });
});