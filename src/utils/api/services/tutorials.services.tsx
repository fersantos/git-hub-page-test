import { dndAPI } from './apis-url'

export class TutorialDataService {
  getAll() {
    return dndAPI.get("/tutorials");
  }

  get(id:number) {
    return dndAPI.get(`/tutorials/${id}`);
  }

  create(data:any) {
    return dndAPI.post("/tutorials", data);
  }

  update(id:number, data:any) {
    return dndAPI.put(`/tutorials/${id}`, data);
  }

  delete(id:number) {
    return dndAPI.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return dndAPI.delete(`/tutorials`);
  }

  findByTitle(title:string) {
    return dndAPI.get(`/tutorials?title=${title}`);
  }
}
